import { GetStaticProps } from 'next';
import { getPosts } from '../lib/sanity';

interface Post {
  _id: string;
  title: string;
  description: string;
}

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts && posts.length ? (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post._id} className="border-b pb-4">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPosts();
    return { props: { posts } };
  } catch (e) {
    return { props: { posts: [] } };
  }
};
