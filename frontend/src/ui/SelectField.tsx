import React, { ChangeEventHandler } from 'react';

export function StockEntrySelectField({
  id,
  label,
  // value,
  // onChange,
  error,
}: {
  id: string,
  label: string,
  // value: string,
  // onChange: ChangeEventHandler,
  error: React.ReactNode,
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <select
        id={id}
        name={id}
        // value={value}
        // onChange={onChange}
        required
      >
        <option value="">Select Type</option>
        <option value="IN">In</option>
        <option value="OUT">Out</option>
      </select>
      {error}
    </div>
  );
}