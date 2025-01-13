import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StockEntriesController } from './stock-entries.controller';
import { StockEntriesService } from './stock-entries.service';

@Module({
  imports: [PrismaModule],
  controllers: [StockEntriesController],
  providers: [StockEntriesService],
})
export class StockEntriesModule {}
