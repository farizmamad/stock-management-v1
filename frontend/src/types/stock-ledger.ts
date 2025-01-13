import { Item } from './item';

export type StockLedger = {
  id: string;
  batch_id: string;
  item_code: string;
  item: Item;
  tanggal: Date;
  last_stock: number;
  qty_in: number | null;
  qty_out: number | null;
  current_stock: number;
};