import {
  Body,
  Controller,
  Get,
  Post,
  Query
} from '@nestjs/common';
import { PaginationInputDto } from 'src/utils/pagination/pagination.dto';
import { PaginationQuery } from 'src/utils/pagination/pagination.query';
import { CreateItemDto } from './dto/create-item.dto';
import { FindAllItemsDto } from './dto/find-all-items.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  findAll(@Query() query: FindAllItemsDto & PaginationQuery) {
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
    return this.itemService.findAll({
      where,
      skip: paginationInput.skip,
      take: paginationInput.take,
    });
  }
}
