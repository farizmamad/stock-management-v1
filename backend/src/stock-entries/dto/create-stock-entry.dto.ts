import { StockEntryType } from '@prisma/client';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsString,
} from 'class-validator';

export class CreateStockEntryDetailDto {
  @IsString()
  batch_id: string;

  @IsString()
  item_code: string;

  @IsDateString()
  expiry_date: Date;

  @IsInt()
  qty: number;
}

export class CreateStockEntryDto {
  @IsString()
  entry_id: string;

  @IsDateString()
  tanggal: Date;

  @IsString()
  @IsEnum(StockEntryType)
  type: StockEntryType;

  @IsArray()
  entry_details: CreateStockEntryDetailDto[];
}
