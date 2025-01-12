import { Item } from '@/types/item';

export function ItemTable({ data }: { data: Item[] }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Item Code
                </th>
                <th scope="col" className="px-6 py-3">
                    Item Name
                </th>
                <th scope="col" className="px-6 py-3">
                    UOM
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map(d => {
                return (
                    <tr className="bg-white border-b" key={d.item_code}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {d.item_code}
                        </th>
                        <td className="px-6 py-4">
                            {d.name}
                        </td>
                        <td className="px-6 py-4">
                            {d.uom}
                        </td>
                    </tr>
                );    
            })}
        </tbody>
      </table>
    </div>
  );
}