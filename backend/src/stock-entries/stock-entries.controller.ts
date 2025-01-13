import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaginationInputDto } from 'src/utils/pagination/pagination.dto';
import { PaginationQuery } from 'src/utils/pagination/pagination.query';
import { CreateStockEntryDto } from './dto/create-stock-entry.dto';
import { FindAllStockEntryDto } from './dto/find-all-stock-entry.dto';
import { CreateStockEntryPipe } from './pipes/create-stock-entry.pipe';
import { StockEntriesService } from './stock-entries.service';

@Controller('stock-entries')
export class StockEntriesController {
  constructor(private readonly stockEntriesService: StockEntriesService) {}

  @Post()
  async create(
    @Body(CreateStockEntryPipe) createStockEntryDto: CreateStockEntryDto,
  ) {
    return await this.stockEntriesService.create(createStockEntryDto);
  }

  @Get()
  findAll(@Query() query: FindAllStockEntryDto & PaginationQuery) {
    const paginationInput = new PaginationInputDto(query);
    let where = undefined;
    if (query.search) {
      where = {
        OR: [
          { item_code: { contains: query.search } },
          { name: { contains: query.search } },
        ],
      };
    }
    return this.stockEntriesService.findAll({
      where,
      skip: paginationInput.skip,
      take: paginationInput.take,
      orderBy: {
        tanggal: 'asc',
      },
    });
  }
}
