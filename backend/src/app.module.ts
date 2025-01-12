import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { StockEntriesModule } from './stock-entries/stock-entries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ItemsModule,
    StockEntriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
