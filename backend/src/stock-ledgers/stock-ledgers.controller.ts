import { Controller, Get, Query } from '@nestjs/common';
import { StockLedgersService } from './stock-ledgers.service';
import { FindAllStockLedgersDto } from './dto/find-all-stock-ledgers.dto';
import { PaginationQuery } from 'src/utils/pagination/pagination.query';
import { PaginationInputDto } from 'src/utils/pagination/pagination.dto';

@Controller('stock-ledgers')
export class StockLedgersController {
  constructor(private readonly stockLedgersService: StockLedgersService) {}

  @Get()
  findAll(@Query() query: FindAllStockLedgersDto & PaginationQuery) {
    const paginationInput = new PaginationInputDto(query);
    let where = undefined;
    if (query.search) {
      where = {
        OR: [
          { item_code: { contains: query.search } },
          { batch_id: { contains: query.search } },
        ],
      };
    }
    return this.stockLedgersService.findAll({
      where,
      skip: paginationInput.skip,
      take: paginationInput.take,
      orderBy: { tanggal: 'asc' },
    });
  }
}
