import clsx from 'clsx'

export function InFormActionButton({ text, onClick, color }: {
  text: string,
  onClick: () => void,
  color: string,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
        `bg-${color}-600`,
        `hover:bg-${color}-800`,
        `focus:ring-${color}-300`
      )}
    >
      {text}
    </button>
  );
}