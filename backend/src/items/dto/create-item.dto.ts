import { IsNotEmpty, IsString } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  item_code: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  /** unit of measurement */
  @IsNotEmpty()
  @IsString()
  uom: string;
}
