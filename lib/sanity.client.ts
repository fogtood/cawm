import { createClient } from 'next-sanity'

const projectId = 'fyfkc0lb'
const dataset = 'production'
const apiVersion = '2025-07-09'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_VIEWER_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})
