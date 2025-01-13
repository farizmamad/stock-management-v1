import Link from 'next/link';

export function CTAButton({ text, url }: { text: string, url?: string }) {
  return (
    <Link
      type="button"
      href={url ?? ''}
      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
    >
      {text}
    </Link>
  );
}