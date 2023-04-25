import React from "react";

type Props = {
  params: { id: string };
};

const Post = ({ params }: Props) => {
  const { id } = params;
  return (
    <div>
      <div>Post</div>
      <div>Post {id}</div>
    </div>
  );
};

export const revalidate = 120;

export default Post;
