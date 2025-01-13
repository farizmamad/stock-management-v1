import { convertDateDisplay } from '@/lib/utils';
import { StockEntry } from '@/types/stock-entry';

export function StockEntryTable({ data }: { data: StockEntry[] }) {
	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" className="px-6 py-3">
							Entry ID
						</th>
						<th scope="col" className="px-6 py-3">
							Tanggal
						</th>
						<th scope="col" className="px-6 py-3">
							Type
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(d => {
						return (
							<tr className="bg-white border-b" key={d.entry_id}>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
									{d.entry_id}
								</th>
								<td className="px-6 py-4">
									{convertDateDisplay(d.tanggal)}
								</td>
								<td className="px-6 py-4">
									{d.type}
								</td>
							</tr>
						);    
					})}
				</tbody>
			</table>
		</div>
	);
}