import { Test, TestingModule } from '@nestjs/testing';
import { StockLedgersController } from './stock-ledgers.controller';
import { StockLedgersService } from './stock-ledgers.service';

describe('StockLedgersController', () => {
  let controller: StockLedgersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockLedgersController],
      providers: [StockLedgersService],
    }).compile();

    controller = module.get<StockLedgersController>(StockLedgersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
