import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StockLedgersController } from './stock-ledgers.controller';
import { StockLedgersService } from './stock-ledgers.service';

@Module({
  imports: [PrismaModule],
  controllers: [StockLedgersController],
  providers: [StockLedgersService],
})
export class StockLedgersModule {}
