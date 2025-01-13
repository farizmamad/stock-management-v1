import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { StockEntriesModule } from './stock-entries/stock-entries.module';
import { StockLedgersModule } from './stock-ledgers/stock-ledgers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ItemsModule,
    StockEntriesModule,
    StockLedgersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
