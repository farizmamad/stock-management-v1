'use server'

import { ItemAPIResponse } from '@/types/api-response';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const CreateItemSchema = z.object({
  item_code: z.string(),
  name: z.string(),
  uom: z.string(),
});

export async function createItem(prevState: ItemAPIResponse, formData: FormData): Promise<ItemAPIResponse> {  
  const validatedFields = CreateItemSchema.safeParse({
    item_code: formData.get('item_code'),
    name: formData.get('name'),
    uom: formData.get('uom'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'invalid input',
    }
  }

  fetch(`${process.env.BACKEND_URL}/items`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(validatedFields.data),
  }).catch((reason) => {
    return reason;
  })

  revalidatePath('/item');
  redirect('/item');
}
