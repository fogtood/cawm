import { createClient } from 'next-sanity'

const projectId = 'fyfkc0lb'
const dataset = 'production'
const apiVersion = 'vX'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
