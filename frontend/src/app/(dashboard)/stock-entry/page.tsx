import { StockEntry, StockEntryDetail } from '@/types/stock-entry';
import { StockEntryDetailTable } from '@/ui/dashboard/stock-entry/StockEntryDetailTable';
import { StockEntryTable } from '@/ui/dashboard/stock-entry/StockEntryTable';

export default async function StockEntryPage() {
  const data = await fetch(`${process.env.BACKEND_URL}/stock-entries`);
  const stockEntries: StockEntry[] = await data.json();
  const stockEntriesDetails: StockEntryDetail[] = []
  for (const entry of stockEntries) {
    for (const detail of entry.entry_details) {
      stockEntriesDetails.push({
        ...detail,
        entry_id: entry.entry_id,
      });
    }
  }
  return (
    <>
      <h1 className="text-gray-900 text-xl"><strong>Stock Entries</strong></h1>
      <StockEntryTable data={stockEntries} />
      <h1 className="text-gray-900 text-xl"><strong>Details</strong></h1>
      <StockEntryDetailTable data={stockEntriesDetails} />
    </>
  );
}