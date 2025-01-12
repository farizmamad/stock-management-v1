import { DEFAULT_TAKE_PER_PAGE } from './constants';

export class PaginationInputDto {
  skip?: number;
  take?: number;
  constructor(params: {
    limit?: string;
    page?: string;
    pagination?: string;
  }) {
    if (params.pagination === 'false') return; 
    this.take =  params.limit != null && params.limit != undefined ? parseInt(params.limit) : DEFAULT_TAKE_PER_PAGE;
    this.skip = params.page != null && params.page != undefined ? this.take * ((parseInt(params.page) ?? 1) - 1) : 0;
  }
}
