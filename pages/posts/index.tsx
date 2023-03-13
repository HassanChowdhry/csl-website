import { GetStaticProps } from "next";
import Link from "next/link";

import { Post } from "../../interfaces";
import { samplePostData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: Post[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Posts List | Dal CSL">
    <h1>Posts List</h1>
    <p></p>
    <p>You are currently on: /posts</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Post[] = samplePostData;
  return { props: { items } };
};

export default WithStaticProps;
