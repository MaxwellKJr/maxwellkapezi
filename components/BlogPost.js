import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <div className="">
      <Link href="/">
        <a>
          <h3 className="text-2xl">Maybe Tomorrow</h3>
        </a>
      </Link>
      <p className="py-4 font-baskerville text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        ipsa. Ab quod ad quia necessitatibus!
      </p>
      <Link href="/">
        <a className="text-[#00FFA5]">Read More...</a>
      </Link>
      <br />
      <small>6th July, 2022</small>
      <hr className="my-2 opacity-30" />
    </div>
  );
};

export default BlogPost;
