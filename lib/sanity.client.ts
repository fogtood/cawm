import { createClient } from 'next-sanity'
import { cache } from 'react'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
  stega: {
    enabled: process.env.NEXT_PUBLIC_SANITY_STEGA_ENABLED === 'true',
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || '/studio',
  },
})

// Live preview client (for draft content)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'drafts',
  stega: {
    enabled: process.env.NEXT_PUBLIC_SANITY_STEGA_ENABLED === 'true',
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || '/studio',
  },
})

// Enable React cache for next-sanity
export const clientFetch = cache(client.fetch.bind(client))
export const previewFetch = cache(previewClient.fetch.bind(previewClient))
