import { IsOptional, IsString } from 'class-validator';

export class FindAllItemDto {
  @IsOptional()
  @IsString()
  search?: string;
}
