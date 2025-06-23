import type { NextApiRequest, NextApiResponse } from 'next';
import { getPosts } from '../../../lib/sanity';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}
