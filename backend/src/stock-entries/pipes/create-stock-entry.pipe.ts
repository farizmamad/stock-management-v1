import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateStockEntryDto } from '../dto/create-stock-entry.dto';

@Injectable()
export class CreateStockEntryPipe implements PipeTransform {
  transform(value: CreateStockEntryDto, _: ArgumentMetadata) {
    value.tanggal = new Date(value.tanggal);
    value.entry_details = value.entry_details.map((ed) => {
      return {
        batch_id: ed.batch_id,
        expiry_date: new Date(ed.expiry_date),
        item_code: ed.item_code,
        qty: ed.qty,
      };
    });
    return value;
  }
}
