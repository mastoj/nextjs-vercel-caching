import Link from "next/link";
import React from "react";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Cached</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/cached/1" className="underline text-blue-800">
              Post 1
            </Link>
          </li>
          <li>
            <Link href="/cached/2" className="underline text-blue-800">
              Post 2
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Not cached</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/notcached/1" className="underline text-blue-800">
              Post 1
            </Link>
          </li>
          <li>
            <Link href="/notcached/2" className="underline text-blue-800">
              Post 2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Posts;
