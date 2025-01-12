import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StockLedgersService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.StockLedgerWhereInput;
    orderBy?: Prisma.StockLedgerOrderByWithRelationInput;
  }) {
    return await this.prisma.stockLedger.findMany({
      select: {
        item_code: true,
        batch_id: true,
        tanggal: true,
        last_stock: true,
        qty_in: true,
        qty_out: true,
        current_stock: true,
      },
      ...params,
    });
  }
}
