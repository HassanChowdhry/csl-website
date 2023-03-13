import { GetStaticProps, GetStaticPaths } from "next";

import { Post } from "../../interfaces";
import { samplePostData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
  item?: Post;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Dal CSL">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.title : "Post Detail"} | Dal CSL`}>
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = samplePostData.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = samplePostData.find((data) => data.id === Number(id));
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
