import { IsOptional, IsString } from 'class-validator';

export class FindAllStockLedgersDto {
  @IsOptional()
  @IsString()
  search?: string;
}
