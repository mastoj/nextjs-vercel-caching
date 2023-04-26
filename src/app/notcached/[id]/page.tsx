import Link from "next/link";
import React from "react";

type Props = {
  params: { id: string };
};

export const revalidate = 20;

const Post = ({ params }: Props) => {
  const { id } = params;
  return (
    <div className="flex flex-col gap-2">
      <Link className="underline text-blue-800" href="/">
        Back
      </Link>
      <div>
        This is not cached, but I expected it to be number {id}{" "}
        {new Date().toString()}{" "}
      </div>
    </div>
  );
};

export default Post;
