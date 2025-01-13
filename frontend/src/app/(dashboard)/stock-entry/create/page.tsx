'use client'

import { createStockEntry } from '@/actions/create-stock-entry';
import { StockEntryAPIResponse } from '@/types/api-response';
import { StockEntryDetail } from '@/types/stock-entry';
import { DatePickerField } from '@/ui/DatePickerField';
import { InFormActionButton } from '@/ui/InFormActionButton';
import { InputField } from '@/ui/InputField';
import { PageTitle } from '@/ui/PageTitle';
import { StockEntrySelectField } from '@/ui/SelectField';
import { SubmitButton } from '@/ui/SubmitButton';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';

const initialState: StockEntryAPIResponse = {
  message: "",
};

export default function CreateStockEntryPage() {
  const [state, formAction] = useActionState(createStockEntry, initialState);
  const [entryDetails, setEntryDetails] = useState<StockEntryDetail[]>([]);

  const handleAddDetail = () => {
    setEntryDetails([
      ...entryDetails,
      {
        item_code: '',
        batch_id: '',
        expiry_date: new Date(),
        qty: 0,
      },
    ]);
  };

  const handleDetailChange = (index: number, field: keyof StockEntryDetail, value: any) => {
    const updatedDetails = [...entryDetails];
    let detail = updatedDetails[index];
    detail = { ...detail, [field]: value };
    updatedDetails[index] = detail;
    setEntryDetails(updatedDetails);
  };

  const handleRemoveDetail = (index: number) => {
    const updatedDetails = [...entryDetails];
    updatedDetails.splice(index, 1);
    setEntryDetails(updatedDetails);
  };
  
  return (
    <form action={formAction}>
      <PageTitle text={'Create New Stock Entry'} />
      <p className="mt-2 text-sm text-red-500" key={state.message}>
        {state?.message}
      </p>
      
      {/* Stock Entry Fields */}
      <InputField
        id={'entry_id'}
        name={'entry_id'}
        label={'Entry ID'}
        placeholder=""
        type="text"
        error={
          state?.errors?.entry_id &&
          state?.errors.entry_id.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
      />
      <DatePickerField
        id={'tanggal'}
        name={'tanggal'}
        label={'Tanggal'}
        placeholder=""
        error={
          state?.errors?.tanggal &&
          state?.errors.tanggal.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
      />
      <StockEntrySelectField
        id={'type'}
        label={'Type'}
        error={
          state?.errors?.type &&
          state?.errors.type.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
      />

      {/* Stock Entry Fields */}
      <h3><strong>Details</strong></h3>
      {
        state?.errors?.entry_details &&
        state?.errors.entry_details.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))
      }
      <div className='mb-7'>
        {entryDetails.map((detail, index) => (
          <div key={index} className="my-7" >
            <h4><strong>Detail {index + 1}</strong></h4>
            <InputField
              id={`item_code_${index}`}
              name={`item_code`}
              label={'Item Code: (TODO: get list of available item code from API)'}
              placeholder=""
              type="text"
              value={detail.item_code}
              onChange={(e) =>
                handleDetailChange(index, 'item_code', e.target.value)
              }
              error={
                <></>
              }
            />
            <InputField
              id={`batch_id_${index}`}
              name={`batch_id`}
              label={'Batch ID: (TODO: get list of available Batch ID from the chosen item code)'}
              placeholder=""
              type="text"
              value={detail.batch_id}
              onChange={(e) =>
                handleDetailChange(index, 'batch_id', e.target.value)
              }
              error={
                <></>
              }
            />
            <DatePickerField
              id={`expiry_date_${index}`}
              name={`expiry_date`}
              label={'Expiry Date'}
              placeholder=""
              value={detail.expiry_date}
                onChange={(e) =>
                  handleDetailChange(index, 'expiry_date', e.target.value)
                }
              error={
                <></>
              }
            />
            <InputField
              id={`qty_${index}`}
              name={`qty`}
              label={'Quantity'}
              placeholder=""
              type="number"
              value={detail.qty}
              onChange={(e) =>
                handleDetailChange(index, 'qty', e.target.value)
              }
              error={
                <></>
              }
            />
            <InFormActionButton text={'Remove'} onClick={() => handleRemoveDetail(index)} color={'gray'}/>
          </div>
        ))}
        <InFormActionButton text={'Add Detail'} onClick={handleAddDetail} color={'blue'} />
      </div>

      <SubmitButton text={'Create new entry'} pending={useFormStatus().pending} />
    </form>
  );
}