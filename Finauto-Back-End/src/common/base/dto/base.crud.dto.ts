import { notifyEnum } from 'src/common/enum/notify.enum';
import { RelationalDto } from '.';
import { MultilanguageDto } from './multilanguage.dto';
import { RulesDto } from './rules.dto';
import { DestinationType } from '../types/destination.type';

// export interface BaseDto {
//   id?: string;
//   name?: MultilanguageDto;
//   rules?: RulesDto

//   // To notification system
//   userOrigin?: RelationalDto
//   destinyType?: notifyEnum
//   destinyUser?: DestinationType[]
//   message?: string


// }
export interface BaseDto {
  id?: string;
  [key: string]: any; // Index signature for accepting any other properties
}

