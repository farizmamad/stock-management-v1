export type StockLedger = {
  id: string;
  item_code: string;
  batch_id: string;
  tanggal: Date;
  last_stock: number;
  qty_in: number | null;
  qty_out: number | null;
  current_stock: number;
};