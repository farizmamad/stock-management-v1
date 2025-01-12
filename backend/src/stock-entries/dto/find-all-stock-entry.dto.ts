import { IsOptional, IsString } from 'class-validator';

export class FindAllStockEntryDto {
  @IsOptional()
  @IsString()
  search?: string;
}
