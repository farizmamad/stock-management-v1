import { IsOptional, IsString } from 'class-validator';

export class FindAllItemsDto {
  @IsOptional()
  @IsString()
  search?: string;
}
