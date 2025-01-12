import { StockEntry } from '@/types/stock-entry';

export function StockEntryTable({ data }: { data: StockEntry[] }) {
	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
										<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={d.entry_id}>
												<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
														{d.entry_id}
												</th>
												<td className="px-6 py-4">
														{d.tanggal}
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