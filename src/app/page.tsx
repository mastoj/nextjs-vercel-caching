import Link from "next/link";
import React from "react";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      Posts
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/1" className="underline text-blue-800">
            Post 1
          </Link>
        </li>
        <li>
          <Link href="/2" className="underline text-blue-800">
            Post 2
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
