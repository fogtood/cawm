import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { PortableTextBlock, PortableTextSpan } from '@portabletext/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to extract date and time from a dateTime string.
export function extractDateAndTime(dateTimeStr?: string): { date: string; time: string } {
  if (!dateTimeStr) return { date: '', time: '' }
  const dateObj = new Date(dateTimeStr)
  if (isNaN(dateObj.getTime())) return { date: '', time: '' }
  // Format date as "MMM dd, yyyy"
  const date = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  // Format time as "h:mm AM/PM"
  const time = dateObj.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
  return { date, time }
}

export function toPlainText(blocks: PortableTextBlock[] = []): string {
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !Array.isArray(block.children)) {
        return ''
      }

      return block.children.map((child) => (child as PortableTextSpan).text || '').join('')
    })
    .join('\n\n')
}
