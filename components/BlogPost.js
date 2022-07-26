import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <div className="rounded bg-black backdrop-blur bg-opacity-50 p-4 text-white hover:shadow-lg hover:scale-105 transition ease-in-out mb-4 hover:cursor-default">
      <Link href="/">
        <a>
          <h3 className="text-3xl font-baskerville">Maybe Tomorrow</h3>
        </a>
      </Link>
      <p className="py-4 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        ipsa. Ab quod ad quia necessitatibus!
      </p>
      <Link href="/">
        <a className="text-[#00FFA5]">Read More...</a>
      </Link>
      <br />
      <hr className="my-2 opacity-30" />
      <small>6th July, 2022</small>
    </div>
  );
};

export default BlogPost;
