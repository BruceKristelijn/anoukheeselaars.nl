import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'y2276jym',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})
