import { ChangeEventHandler } from 'react';

export function SelectField({ id, label, value, onChange }: { id: string, label: string, value: string, onChange: ChangeEventHandler }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
      >
        <option value="">Select Type</option>
        <option value="in">In</option>
        <option value="out">Out</option>
      </select>
    </div>
  );
}