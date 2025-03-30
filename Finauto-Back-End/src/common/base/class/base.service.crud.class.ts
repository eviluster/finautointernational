import { CodeEnum } from 'src/common/enum/code.enum';
import { CrudDto, ReturnDto } from '../dto';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { KindEnum } from 'src/common/enum/kind.enum';
import { ClassValidator } from '../validator/class.validator';
import { ValidateScenarioDto } from '../dto/validate.scenario.dto';
import { ResourceEnum } from '../../enum/resource.enum';
import { fieldsEnum } from 'src/common/enum/fields.enum';
import { BaseDto } from '../dto/base.crud.dto';
import { DeleteDto } from '../dto/delete.dto';
import { SearchManyDto } from '../dto/search.many.dto';
import { ComparisonType } from 'src/common/enum/comparison.type.enum';
import { ConditionSearchDto } from '../dto/condition.search.dto';
import { MethodEnum } from 'src/common/enum/method.enum';

export class BaseServiceCRUD<TEntity,createDto extends BaseDto,updateDto extends BaseDto> {
  private dto: CrudDto;
  private returnDto: ReturnDto;
  private valid: boolean;
  private queryBuilder: SelectQueryBuilder<TEntity>;

  constructor(
    repo: Repository<TEntity>,
    ) {
    this.dto = new CrudDto();
    this.dto.repo = repo;
    this.returnDto = new ReturnDto();
  }

  async findAllItems():Promise<ReturnDto> {
    const returnDto =new ReturnDto;
    returnDto.data = await this.dto.repo.find({});
    return returnDto
  }
  async create(createDto: createDto): Promise<ReturnDto> {
    if (createDto.rules) {
      this.valid = await this._validate(createDto);
    }
    else{
      this.valid = true
    }
    if (this.valid) {
      try {
        this.returnDto.data = await this.dto.repo.save(createDto);
      } catch (error) {
        this.returnDto.isSuccess = false;
        this.returnDto.errorMessage = { en: error.message };
        this.returnDto.returnCode = error.code;
      }
    } else {
      this.returnDto.isSuccess = false;
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage = { es: ResourceEnum.ALREADY_EXST };
    }
    return this.returnDto;
  }
  async update(updateDto: updateDto): Promise<ReturnDto> {
    this.dto.id = updateDto.id;
    if (updateDto.rules) {
      this.valid = await this._validate(updateDto);
    }
    else{
      this.valid = true
    }
    if (this.valid) {
      try {
        const object = await this.dto.repo.findOne({
          where: {
            id: this.dto.id,
          },
        });
         if (!object) {
          this.returnDto.isSuccess = false;
          this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
          // traducir
          this.returnDto.errorMessage = {};
        } else {
          this.returnDto.data = await this.dto.repo.save(updateDto);
        }
      } catch (error) {
        this.returnDto.isSuccess = false;
        this.returnDto.errorMessage = { en: error.message };
        this.returnDto.returnCode = error.code;
      }
    } else {
      this.returnDto.isSuccess = false;
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage = { es: ResourceEnum.ALREADY_EXST };
    }
    return this.returnDto;
  }

  async remove(deleteDto: DeleteDto): Promise<ReturnDto> {
    this.dto.id = deleteDto.id;
    const item = await this.dto.repo.findOne({
      where: {
        id: this.dto.id,
      },
    });
    if (!item) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage = {
        es: `the Item with id ${this.dto.id} do not exist`,
      };
    } else if (item.isUsed == true) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage = {
        es: `the Item with id ${this.dto.id} is in use`,
      };
    } else {
      this.returnDto.data = await this.dto.repo.softDelete(this.dto.id);
    }
    return this.returnDto;
  }

  async search(searchDto: SearchManyDto): Promise<ReturnDto> {
    this.queryBuilder = this.dto.repo.createQueryBuilder(this.dto.repo.metadata.tableName);

    if (searchDto.queryType == fieldsEnum.ONE) {
      await this.findOne(searchDto)
    } else 
    if (searchDto.queryType == fieldsEnum.ALL) {
      await this.findAll(searchDto);
    } else {
      await this.findByCriteria(searchDto);
    }

    if(searchDto.queryType != fieldsEnum.ONE)
    {
      // this.returnDto.data = this.sortJson(this.returnDto.data as any[],searchDto.orderBy)
    }
    return this.returnDto;
  }


// private sortJson(data: any[], orderBy: OrderDto[]): any[] {
//   return data.sort((a, b) => {
//     for (const { field, order } of orderBy) {
//       const [fieldPath, subField] = field.split('.');
//       const aValue = subField ? a[fieldPath]?.[subField] : a[fieldPath];
//       const bValue = subField ? b[fieldPath]?.[subField] : b[fieldPath];

//       if (aValue < bValue) return order === 'ASC' ? -1 : 1;
//       if (aValue > bValue) return order === 'ASC' ? 1 : -1;
//     }
//     return 0; // If all compared fields are equal
//   });
// }


  async findOne(searchDto: SearchManyDto) {
    
    const item = await this.dto.repo.findOne({
      where: {
        id:searchDto.id,
      },
    });
    if (!item) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
    } else {
      this.returnDto.data = [item];
    }
  }

  async findAll(searchDto: SearchManyDto) {
    this.returnDto.data = await this.dto.repo.find( )}

  async findByCriteria(searchDto: SearchManyDto) {


    this.addSelectFields(this.queryBuilder, searchDto.select);
    this.addWhereConditions(this.queryBuilder, searchDto.where);



    if(searchDto.skip !== undefined && searchDto.take !== undefined){
      this.addPagination(searchDto)
    }
    else if (searchDto.skip !== undefined) {
      this.queryBuilder.skip(this.startPage(searchDto.skip, searchDto.take));
    }

    else if (searchDto.take !== undefined) {
      this.queryBuilder.take(searchDto.take);
    }

    this.returnDto.data = await this.queryBuilder.getMany();
  }

  private addSelectFields(queryBuilder: SelectQueryBuilder<any>, selectFields?: string[]) {
    if (selectFields && selectFields.length > 0) {
      queryBuilder.select(selectFields.map(field => `${queryBuilder.alias}.${field}`));
    }
  }

  private addWhereConditions(queryBuilder: SelectQueryBuilder<any>, whereConditions?: ConditionSearchDto[]) {
    if (whereConditions) {
      whereConditions.forEach(condition => {
        const { type, field, value, range } = condition;
        switch (type) {
          case ComparisonType.EQUAL:
            queryBuilder.andWhere(`${queryBuilder.alias}.${field} = :${field}`, { [field]: value });
            break;
          case ComparisonType.LIKE:
            queryBuilder.andWhere(`${queryBuilder.alias}.${field} LIKE :${field}`, { [field]: `%${value}%` });
            break;
          case ComparisonType.BIGGER_THAN:
            queryBuilder.andWhere(`${queryBuilder.alias}.${field} > :${field}`, { [field]: value });
            break;
          case ComparisonType.LESS_THAN:
            queryBuilder.andWhere(`${queryBuilder.alias}.${field} < :${field}`, { [field]: value });
            break;
          case ComparisonType.BETWEEN:
            if (range && range.length === 2) {
              queryBuilder.andWhere(`${queryBuilder.alias}.${field} BETWEEN :start AND :end`, {
                start: range[0],
                end: range[1]
              });
            }
            break;
          default:
            break;
        }
      });
    }
  }




  private addPagination(searchDto: SearchManyDto) {
    this.queryBuilder
      .skip(this.startPage(searchDto.skip, searchDto.take))
      .take(searchDto.take);
  }
  private startPage(page: number, limit: number) {
    return page * limit;
  }


   async _validate(dto: BaseDto): Promise<boolean> {
    const rules = dto.rules;
    this.valid = true;
    if (rules.comparisonKind == KindEnum.UINQUE) {
      const scenarios = []; 
      rules.field.forEach((rule: string) => {
        const scenario = new ValidateScenarioDto();
        scenario.table = this.dto.repo.metadata.tableName;
        scenario.field = rule;
        scenario.value = dto[rule];
        scenarios.push(scenario);
      });
       const validated: ClassValidator = new ClassValidator();
       if(rules.method == MethodEnum.CREATE)
        {
          this.valid = await validated.validateCreate(this.dto.repo, scenarios);
        }
        else if(rules.method == MethodEnum.UPDATE)
        {
          this.valid = await validated.validateUpdate(dto.id,this.dto.repo, scenarios);
        }    
      }
    return this.valid;
  }
  async active(dto: DeleteDto): Promise<ReturnDto> {
    this.dto.id = dto.id;
    const item = await this.dto.repo.findOne({
      where: {
        id: this.dto.id,
      },
    });
    if (!item) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
    } else if (item.isUsed == true) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
    } else {
      item.isActive = !item.isActive;
      this.returnDto.data = await this.dto.repo.save(item);
    }
    return this.returnDto;
  }

}
