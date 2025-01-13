import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function DashboardHome() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-full md:px-20">
      <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
        Welcome to <strong>Stock Management System.</strong>
      </p>
      <Link
        href="/item"
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Go to Item</span> <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
    </div>
  );
}