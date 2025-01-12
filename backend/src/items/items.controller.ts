import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { PaginationInputDto } from 'src/utils/pagination/pagination.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { FindAllItemDto } from './dto/find-all-item.dto';
import { ItemsService } from './items.service';
import { ErrorsInterceptor } from 'src/interceptors/error.interceptor';
import { PaginationQuery } from 'src/utils/pagination/pagination.query';

@Controller('items')
@UseInterceptors(ErrorsInterceptor)
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  findAll(@Query() query: FindAllItemDto & PaginationQuery) {
    const paginationInput = new PaginationInputDto(query);
    let where = undefined;
    if (query.search) {
      where = {
        OR: [
          { item_code: { contains: query.search } },
          { name: { contains: query.search } },
        ],
      }
    }
    return this.itemService.findAll({
      where,
      skip: paginationInput.skip,
      take: paginationInput.take,
    });
  }
}
