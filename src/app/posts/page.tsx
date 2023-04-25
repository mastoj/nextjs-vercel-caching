import Link from "next/link";
import React from "react";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div>
      Posts
      <ul>
        <li>
          <Link href="/posts/1">Post 1</Link>
        </li>
        <li>
          <Link href="/posts/1">Post 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
