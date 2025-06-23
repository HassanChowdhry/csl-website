import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

export async function getPosts() {
  const query = `*[_type == "post"]{_id, title, description}`;
  return await sanityClient.fetch(query);
}
