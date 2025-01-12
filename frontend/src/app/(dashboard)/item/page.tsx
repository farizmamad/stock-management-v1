import { ItemTable } from '@/ui/dashboard/item/ItemTable';

export default async function ItemPage() {
  const data = await fetch(`${process.env.BACKEND_URL}/items`);
  const items = await data.json();
  return (
    <>
      <h1 className="text-gray-900 text-xl"><strong>Items</strong></h1>
      <ItemTable data={items}/>
    </>
  );
}