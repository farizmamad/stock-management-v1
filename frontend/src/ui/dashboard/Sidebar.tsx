'use client';

import Link from 'next/link';
import {
  UserGroupIcon,
  HomeIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

const menu = [
  {
    key: '/item',
    label: 'Items',
    icon: UserGroupIcon,
  },
  {
    key: '/stock-entry',
    label: 'Stock Entries',
    icon: HomeIcon,
  },
  {
    key: '/stock-ledger',
    label: 'Stock Ledger',
    icon: ClipboardDocumentIcon,
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-hidden">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
        {menu.map(item => {
          const LinkIcon = item.icon;
          return (
            <li key={item.key}>
              <Link
                key={item.key}
                href={item.key}
                className={clsx(
                  'flex py-3 grow items-center justify-start gap-4 rounded-md p-3 text-sm text-gray-50 font-medium hover:bg-gray-700 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-sky-700 text-blue-600': pathname === item.key,
                  },
                )}
              >
                <div className="w-5">
                  <LinkIcon />
                </div>
                <p className="hidden md:block">{item.label}</p>
              </Link>
            </li>
          );
        })}
        </ul>
      </div>
    </aside>
  );
};
