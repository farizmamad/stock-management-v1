import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ItemCreateInput) {
    return this.prisma.item.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput;
  }) {
    return this.prisma.item.findMany({
      select: {
        id: true,
        item_code: true,
        name: true,
        uom: true,
      },
      ...params,
    });
  }
}
