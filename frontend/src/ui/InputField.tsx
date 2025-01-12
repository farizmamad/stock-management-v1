import { ChangeEventHandler } from 'react';

export function InputField({ id, label, placeholder, type, error }: {
  id: string,
  label: string,
  placeholder: string,
  // value: string | number,
  // onChange: ChangeEventHandler<HTMLInputElement> | undefined,
  type: 'text' | 'number' | 'date',
  error: React.ReactNode,
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        // value={value}
        required
        // onChange={onChange}
      />
      {error}
    </div>
  );
}