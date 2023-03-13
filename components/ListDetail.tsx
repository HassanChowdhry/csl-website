import * as React from "react";

import { Post } from "../interfaces";

type ListDetailProps = {
  item: Post;
};

const ListDetail = ({ item: post }: ListDetailProps) => (
  <div>
    <h1>Detail for {post.title}</h1>
    <p>ID: {post.id}</p>
  </div>
);

export default ListDetail;
