import { createClient } from 'next-sanity'

const projectId = 'fyfkc0lb'
const dataset = 'production'
const apiVersion = '2025-07-09'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
})
