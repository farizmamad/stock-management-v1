import { StockLedger } from '@/types/stock-ledger';
import { StockLedgerTable } from '@/ui/dashboard/stock-ledger/StockLedgerTable';

export default async function StockLedgerPage() {
  const data = await fetch(`${process.env.BACKEND_URL}/stock-ledgers`);
  const stockLedgers: StockLedger[] = await data.json();
  return (
    <>
      <h1 className="text-gray-900 text-xl"><strong>Stock Ledger</strong></h1>
      <StockLedgerTable data={stockLedgers} />
    </>
  );
}