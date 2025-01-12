import { FormStatus } from 'react-dom';


export function SubmitButton({ text, pending }: { text: string, pending: boolean }) {
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
    >
      {text}
    </button>
  );
}