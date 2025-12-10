import { createClient } from 'next-sanity'

const projectId = 'fyfkc0lb'
const dataset = 'production'
const apiVersion = '2025-10-21'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
