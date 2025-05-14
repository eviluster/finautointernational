import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,

} from '@nestjs/common';
import { RolesService } from './roles.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUserAdmin } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@UseGuards(JwtGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @Get()
  async findAll(
    @GetUserAdmin() user: User 
  ) {
    return this.rolesService.findAll();
  }

}
