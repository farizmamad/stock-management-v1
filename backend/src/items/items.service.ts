import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ItemCreateInput) {
    return await this.prisma.item.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput;
  }) {
    return await this.prisma.item.findMany({
      select: {
        item_code: true,
        name: true,
        uom: true,
      },
      ...params,
    });
  }
}
