import { Injectable } from '@nestjs/common';
import { Prisma, StockEntryType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStockEntryDto } from './dto/create-stock-entry.dto';

@Injectable()
export class StockEntriesService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async create(data: CreateStockEntryDto) {
    return await this.prisma.$transaction(async (trx) => {
      if (data.type === StockEntryType.IN) {
        await trx.batchItem.createMany({
          data: data.entry_details.map((ed) => {
            return {
              batch_id: ed.batch_id,
              expiry_date: ed.expiry_date,
              item_code: ed.item_code,
            };
          }),
        });
      }
      const newEntry = await trx.stockEntry.create({
        data: {
          ...data,
          entry_details: undefined,
        },
      });

      const entryDetails = await trx.stockEntryDetail.createMany({
        data: data.entry_details.map((ed) => {
          return {
            batch_id: ed.batch_id,
            entry_id: newEntry.entry_id,
            expiry_date: ed.expiry_date,
            item_code: ed.item_code,
            qty: ed.qty,
          };
        }),
      });

      const lastStocks = await trx.stockLedger.findMany({
        select: {
          current_stock: true,
          item_code: true,
        },
        where: {
          OR: data.entry_details.map(ed => {
            return {
              item_code: ed.item_code,
            }
          }),
        },
      });

      await trx.stockLedger.createMany({
        data: data.entry_details.map((ed) => {
          const lastStock = lastStocks.find(cs => cs.item_code === ed.item_code)?.current_stock ?? 0;
          return {
            batch_id: ed.batch_id,
            current_stock: lastStock + (data.type === StockEntryType.IN ? ed.qty : -ed.qty),
            item_code: ed.item_code,
            last_stock: lastStock,
            qty_in: data.type === StockEntryType.IN ? ed.qty : null,
            qty_out: data.type === StockEntryType.IN ? null : ed.qty,
            tanggal: data.tanggal,
          };
        }),
      });

      return {
        ...newEntry,
        entry_details: entryDetails,
      };
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.StockEntryWhereInput;
    orderBy?: Prisma.StockEntryOrderByWithRelationInput;
  }) {
    return this.prisma.stockEntry.findMany({
      select: {
        entry_id: true,
        tanggal: true,
        type: true,
        entry_details: {
          select: {
            entry_detail_id: true,
            entry_id: true,
            item_code: true,
            batch_id: true,
            expiry_date: true,
            qty: true,
          },
        },
      },
      ...params,
    });
  }
}
