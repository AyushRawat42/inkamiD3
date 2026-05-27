import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const brandColorClassMap: Record<string, string> = {
  'electric-cyan': 'text-electric-cyan',
  'hyper-violet': 'text-hyper-violet',
}
