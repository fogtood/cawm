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

export function toPlainText(blocks: unknown = []): string {
  if (!Array.isArray(blocks)) return ''

  return blocks
    .map((block) => {
      if (
        !block ||
        typeof block !== 'object' ||
        (block as any)._type !== 'block' ||
        !Array.isArray((block as any).children)
      ) {
        return ''
      }

      return (block as any).children
        .map((child: unknown) => {
          if (child && typeof child === 'object' && typeof (child as any).text === 'string') {
            return (child as any).text
          }
          return ''
        })
        .join('')
    })
    .join('\n\n')
}
