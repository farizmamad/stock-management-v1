import { Item } from './item';
import { StockEntry } from './stock-entry';

export type APIResponse<T, D> = { message: string, data?: T, errors?: D };

export type ItemAPIError = {
  item_code?: string[],
  name?: string[],
  uom?: string[],
};
export type ItemAPIResponse = APIResponse<Item, ItemAPIError>;

export type StockEntryAPIError = {
  entry_id?: string[],
  tanggal?: string[],
  type?: string[],
  entry_details?: string[],
};
export type StockEntryAPIResponse = APIResponse<StockEntry, StockEntryAPIError>;
