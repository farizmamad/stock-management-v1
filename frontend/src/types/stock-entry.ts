export type StockEntryDetail = {
  entry_detail_id: string;
  entry_id: string;
  batch_id: string;
  item_code: string;
  expiry_date: Date;
  qty: number;
}

export type StockEntry = {
  entry_id: string;
  tanggal: Date;
  type: string;
  entry_details: StockEntryDetail[];
};
