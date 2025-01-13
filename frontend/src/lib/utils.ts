import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDateDisplay(data: Date): string {
  if (!data) return '';
  data = new Date(data);
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();
  return `${date}/${month}/${year}`;
}