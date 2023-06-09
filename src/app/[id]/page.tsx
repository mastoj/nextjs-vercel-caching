import Link from "next/link";
import React from "react";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return [
    {
      id: "1",
    },
  ];
}

const Post = ({ params }: Props) => {
  const { id } = params;
  return (
    <div className="flex flex-col gap-2">
      <Link className="underline text-blue-800" href="/">
        Back
      </Link>
      <div>This is post number {id}</div>
    </div>
  );
};

export const revalidate = 120;

export default Post;
