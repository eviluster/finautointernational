import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const askYesNo = async (question: string): Promise<boolean> => {
  const answer = await ask(`${question} (s/n): `);
  return answer.toLowerCase() === 's';
};

const getFieldType = async (): Promise<string> => {
  console.log('\nTipos disponibles:');
  console.log('1. string');
  console.log('2. number');
  console.log('3. boolean');
  console.log('4. Date');
  
  const typeChoice = await ask('Seleccione el tipo (1-4): ');
  const types: { [key: string]: string } = {
    '1': 'string',
    '2': 'number',
    '3': 'boolean',
    '4': 'Date'
  };
  return types[typeChoice] || 'string';
};

interface Field {
  name: string;
  type: string;
  decorator: string;
}

async function modifyResource() {
  try {
    // Obtener el nombre del recurso
    const resourceName = process.argv[2];
    if (!resourceName) {
      console.error('No se proporcionó nombre del recurso');
      process.exit(1);
    }

    // Preguntar por el nombre de la tabla
    const tableName = await ask('Ingrese el nombre de la tabla en la base de datos: ');

    // Convertir a PascalCase
    const className = resourceName
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    // Recolectar campos
    const fields: Field[] = [];
    
    // Preguntar si desea añadir campos
    let wantsToAddFields = await askYesNo('\n¿Desea añadir campos a la entidad?');

    while (wantsToAddFields) {
      const fieldName = await ask('\nNombre del campo: ');
      const fieldType = await getFieldType();
      
      // Preguntar si es único
      const isUnique = await askYesNo('¿El campo debe ser único?');
      
      // Preguntar si es nullable solo si no es único
      const isNullable = !isUnique ? await askYesNo('¿El campo puede ser nulo?') : false;
      
      let decoratorOptions = [];
      if (isNullable) decoratorOptions.push('nullable: true');
      if (isUnique) decoratorOptions.push('unique: true');
      
      const decorator = decoratorOptions.length > 0 
        ? `@Column({ ${decoratorOptions.join(', ')} })`
        : '@Column()';
      
      fields.push({
        name: fieldName,
        type: fieldType,
        decorator
      });

      wantsToAddFields = await askYesNo('¿Desea añadir otro campo?');
    }

    // Generar el contenido de la entidad
    const fieldsContent = fields
      .map(field => `  ${field.decorator}\n  ${field.name}: ${field.type};`)
      .join('\n\n');

    const entityPath = path.join(process.cwd(), 'src', resourceName, 'entities', `${resourceName}.entity.ts`);
    
    const entityContent = `import { Entity, Column } from 'typeorm';
import { BasicInformationEntity } from 'src/common/base/entities';

@Entity('${tableName}')
export class ${className} extends BasicInformationEntity {
${fieldsContent}
}
`;

    fs.writeFileSync(entityPath, entityContent);

    // Después de generar la entidad, generamos el DTO
    const dtoPath = path.join(process.cwd(), 'src', resourceName, 'dto', `create-${resourceName}.dto.ts`);
    
    // Generar el contenido del DTO con los decoradores correspondientes según el tipo
    const dtoFieldsContent = fields
      .map(field => {
        const decorators = [];
        
        // Agregar IsOptional si el campo es nullable
        if (field.decorator.includes('nullable: true')) {
          decorators.push('@IsOptional()');
        } else {
          decorators.push('@IsNotEmpty()');
        }

        // Agregar validador según el tipo
        switch(field.type) {
          case 'string':
            decorators.push('@IsString()');
            break;
          case 'number':
            decorators.push('@IsNumber()');
            break;
          case 'boolean':
            decorators.push('@IsBoolean()');
            break;
          case 'Date':
            decorators.push('@IsDate()');
            break;
        }

        const decoratorString = decorators.join('\n  ');
        return `  ${decoratorString}\n  ${field.name}${field.decorator.includes('nullable: true') ? '?' : ''}: ${field.type};`;
      })
      .join('\n\n');

    const dtoContent = `import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsDate, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';

export class Create${className}Dto extends BaseExtendedDto {
${dtoFieldsContent}
}
`;

    fs.writeFileSync(dtoPath, dtoContent);

    // Generar index.ts para los DTOs
    const dtoIndexPath = path.join(process.cwd(), 'src', resourceName, 'dto', 'index.ts');
    const dtoIndexContent = `export * from './create-${resourceName}.dto';
export * from './update-${resourceName}.dto';
`;

    fs.writeFileSync(dtoIndexPath, dtoIndexContent);

    // Generar update DTO
    const updateDtoPath = path.join(process.cwd(), 'src', resourceName, 'dto', `update-${resourceName}.dto.ts`);
    const updateDtoContent = `import { PartialType } from '@nestjs/swagger';
import { Create${className}Dto } from './create-${resourceName}.dto';

export class Update${className}Dto extends PartialType(Create${className}Dto) {}
`;

    fs.writeFileSync(updateDtoPath, updateDtoContent);

    // Generar el module
    const modulePath = path.join(process.cwd(), 'src', resourceName, `${resourceName}.module.ts`);
    const moduleContent = `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ${className} } from './entities/${resourceName}.entity';
import { ${className}Service } from './${resourceName}.service';
import { ${className}Controller } from './${resourceName}.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([${className}])
  ],
  controllers: [${className}Controller],
  providers: [${className}Service],
  exports: [${className}Service]
})
export class ${className}Module {}
`;

    fs.writeFileSync(modulePath, moduleContent);

    // Generar el service
    const servicePath = path.join(process.cwd(), 'src', resourceName, `${resourceName}.service.ts`);
    const serviceContent = `import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { ${className} } from './entities/${resourceName}.entity';
import { Create${className}Dto, Update${className}Dto } from './dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Injectable()
export class ${className}Service extends BaseServiceCRUD<
${className},
Create${className}Dto,
Update${className}Dto> {
  constructor(
    @InjectRepository(${className})
    private readonly repository: Repository<${className}>,
  ) {
    super(repository)
  }

  override async findAllItems() {
    return super.findAllItems();
  }

  override async create(createDto: Create${className}Dto) {
    return super.create(createDto);
  }



  override async update(updateDto: Update${className}Dto) {
    return super.update(updateDto);
  }

  override async remove(deleteDto: DeleteDto) {
    return super.remove(deleteDto);
  }

  override async active(dto: DeleteDto) {
    return super.active(dto);
  }
}`;

    fs.writeFileSync(servicePath, serviceContent);

    // Generar el controller
    const controllerPath = path.join(process.cwd(), 'src', resourceName, `${resourceName}.controller.ts`);
    const controllerContent = `import { Controller } from '@nestjs/common';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ApiTags } from '@nestjs/swagger';
import { Create${className}Dto, Update${className}Dto } from './dto';
import { ${className}Service } from './${resourceName}.service';
import { DeleteDto } from 'src/common/base/dto/delete.dto';


@ApiTags('${resourceName}')
@Controller('${resourceName}')
export class ${className}Controller extends BaseControllerCRUD<
Create${className}Dto,
Update${className}Dto,
${className}Service
> {
  constructor(private readonly Service: ${className}Service) {
    super(Service);
  }

  override async findItems() {
    return super.findItems();
  }

  override async create(createDto: Create${className}Dto) {
    return super.create(createDto);
  }

  override async update(updateDto: Update${className}Dto) {
    return super.update(updateDto);
  }

  override async remove(deleteDto: DeleteDto) {
    return super.remove(deleteDto);
  }

  override async active(dto: DeleteDto) {
    return super.active(dto);
  }
}`;

    fs.writeFileSync(controllerPath, controllerContent);

    // Actualizar ormconfig.ts si existe
    const ormConfigPath = path.join(process.cwd(), 'ormconfig.ts');
    if (fs.existsSync(ormConfigPath)) {
      let ormConfigContent = fs.readFileSync(ormConfigPath, 'utf8');

      // // Agregar import de la nueva entidad
      const importStatement = `import { ${className} } from './src/${resourceName}/entities/${resourceName}.entity';\n`;
      
      // // Encontrar la última importación
      // palabra //import
      const lastImportIndex = ormConfigContent.lastIndexOf('//import');
      const lastImportEndIndex = ormConfigContent.indexOf('\n', lastImportIndex) + 1;
      
      // Insertar el nuevo import
      ormConfigContent = 
          ormConfigContent.slice(0, lastImportEndIndex) +
          importStatement +
          ormConfigContent.slice(lastImportEndIndex);
       
      // Encontrar el array de entities
      //  palabra //////------- New tables
      const entitiesArrayStart = ormConfigContent.indexOf('//////------- New tables') + '//////------- New tables'.length;
      ormConfigContent = ormConfigContent.slice(0, entitiesArrayStart) + `\n    ${className},` + ormConfigContent.slice(entitiesArrayStart);
      
      fs.writeFileSync(ormConfigPath, ormConfigContent);
    }

    console.log(`\nRecurso ${resourceName} generado completamente:`);
    console.log('- Entidad creada');
    console.log('- DTOs generados');
    console.log('- Módulo configurado');
    console.log('- Servicio implementado');
    if (fs.existsSync(ormConfigPath)) {
      console.log('- Actualizado fichero ormconfig.ts');
    }

    rl.close();

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

modifyResource();