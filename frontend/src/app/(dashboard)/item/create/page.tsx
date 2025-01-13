'use client'

import { createItem } from '@/actions/create-item';
import { ItemAPIResponse } from '@/types/api-response';
import { InputField } from '@/ui/InputField';
import { PageTitle } from '@/ui/PageTitle';
import { SubmitButton } from '@/ui/SubmitButton';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const initialState: ItemAPIResponse = {
  message: "",
};

export default function CreateItemPage() {
  const [state, formAction] = useActionState(createItem, initialState);
  
  return (
    <form action={formAction}>
      <PageTitle text={'Create New Item'} />
      <p className="mt-2 text-sm text-red-500" key={state.message}>
        {state?.message}
      </p>
      <InputField
        id={'item_code'}
        label={'Item Code'}
        placeholder="item_code"
        type="text"
        error={
          state?.errors?.item_code &&
          state?.errors.item_code.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
      />
      <InputField
        id={'name'}
        label={'Item Name'}
        placeholder="name"
        type="text"
        error={
          state?.errors?.name &&
          state?.errors.name.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
      />
      <InputField
        id={'uom'}
        label={'UOM'}
        placeholder="uom"
        type="text"
        error={
          state?.errors?.uom &&
          state?.errors.uom.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
      />
      <SubmitButton text={'Create new item'} pending={useFormStatus().pending} />
    </form>
  );
}