import { CTAButton } from '@/ui/CTAButton';
import { ItemTable } from '@/ui/dashboard/item/ItemTable';
import { PageTitle } from '@/ui/PageTitle';

export default async function ItemPage() {
  const data = await fetch(`${process.env.BACKEND_URL}/items`);
  const items = await data.json();
  return (
    <>
      <div className="flex justify-between">
        <PageTitle text={'Items'}/>
        <CTAButton text={'Create new item'} url={'item/create'} />
      </div>
      <ItemTable data={items}/>
    </>
  );
}