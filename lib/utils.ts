import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function badge(entity: { popular: boolean }) {
  return entity.popular ? "text-xs font-medium text-purple-500 bg-purple-50 rounded-full px-2.5 py-0.5" : "";
}