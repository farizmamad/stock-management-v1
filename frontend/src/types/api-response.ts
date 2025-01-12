import { Item } from './item';

export type APIResponse<T, D> = { message: string, data?: T, errors?: D };

export type ItemAPIError = {
  item_code?: string[],
  name?: string[],
  uom?: string[],
};
export type ItemAPIResponse = APIResponse<Item, ItemAPIError>;
