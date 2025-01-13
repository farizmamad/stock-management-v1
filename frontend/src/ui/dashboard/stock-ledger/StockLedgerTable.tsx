import { convertDateDisplay } from '@/lib/utils';
import { StockLedger } from '@/types/stock-ledger';

export function StockLedgerTable({ data }: { data: StockLedger[] }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Item Code
                </th>
                <th scope="col" className="px-6 py-3">
                    Batch ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Tanggal
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Stock
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty In
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty Out
                </th>
                <th scope="col" className="px-6 py-3">
                    Current Stock
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map(d => {
                return (
                    <tr className="bg-white border-b" key={d.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {d.item_code}
                        </th>
                        <td className="px-6 py-4">
                            {d.batch_id}
                        </td>
                        <td className="px-6 py-4">
                            {convertDateDisplay(d.tanggal)}
                        </td>
                        <td className="px-6 py-4">
                            {d.last_stock}
                        </td>
                        <td className="px-6 py-4">
                            {d.qty_in}
                        </td>
                        <td className="px-6 py-4">
                            {d.qty_out}
                        </td>
                        <td className="px-6 py-4">
                            {d.current_stock}
                        </td>
                    </tr>
                );    
            })}
        </tbody>
      </table>
    </div>
  );
}