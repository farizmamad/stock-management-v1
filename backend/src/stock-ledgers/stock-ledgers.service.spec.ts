import { Test, TestingModule } from '@nestjs/testing';
import { StockLedgersService } from './stock-ledgers.service';

describe('StockLedgersService', () => {
  let service: StockLedgersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockLedgersService],
    }).compile();

    service = module.get<StockLedgersService>(StockLedgersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
