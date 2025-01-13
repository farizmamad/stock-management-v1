import { ChangeEventHandler } from 'react';

export function DatePickerField({ id, label, placeholder, type, error, value, onChange }: {
  id: string,
  label: string,
  placeholder: string,
  value?: string | number | Date,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
  type: 'text' | 'number' | 'date',
  error: React.ReactNode,
}) {
  return (
    <div className="mb-5 min-w-52 max-w-80">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        value={value?.toString()}
        onChange={onChange}
        required
      />
      {error}
    </div>
  );
}