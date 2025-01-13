'use server'

import { StockEntryAPIResponse } from '@/types/api-response';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const CreateStockEntrySchema = z.object({
  entry_id: z.string(),
  tanggal: z.string().date(),
  type: z.enum(['IN', 'OUT']),
  entry_details: z.array(z.object({
    entry_detail_id: z.string(),
    item_code: z.string(),
    batch_id: z.string(),
    expiry_date: z.string().date(),
    qty: z.number().int(),
  })),
});

export async function createStockEntry(
  prevState: StockEntryAPIResponse,
  formData: FormData,
): Promise<StockEntryAPIResponse> {
  const entryDetails = [];
  for (let i = 0; i < formData.getAll('item_code').length; i++) {
    entryDetails.push({
      item_code: formData.getAll('item_code')[i],
      batch_id: formData.getAll('batch_id')[i],
      expiry_date: formData.getAll('expiry_date')[i],
      qty: formData.getAll('qty')[i],
    });
  }

  const validatedFields = CreateStockEntrySchema.safeParse({
    entry_id: formData.get('entry_id'),
    tanggal: formData.get('tanggal'),
    type: formData.get('type'),
    entry_details: entryDetails,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'invalid input',
    }
  }

  console.log(JSON.stringify(validatedFields.data));

  const resp = await fetch(`${process.env.BACKEND_URL}/stock-entries`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(validatedFields.data),
  })
  
  if (!resp.ok) {
    return await resp.json();
  }
  revalidatePath('/stock-entry');
  redirect('/stock-entry');
}
