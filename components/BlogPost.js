import React from "react";
import Link from "next/link";
import Moment from "react-moment";

const BlogPost = ({ post }) => {
  const { title, description, slug, postedOn } = post;

  return (
    <div className="rounded relative bg-black bg-opacity-50 p-4 text-white hover:shadow-lg lg:hover:scale-105 transition ease-in-out mb-8 hover:cursor-default">
      <Link href={`/blog/${slug}`}>
        <a>
          <h3 className="text-2xl font-black font-poppins">{title}</h3>
        </a>
      </Link>
      <p className="py-4 text-sm">{description}</p>
      <hr className="mb-2 mt-4 opacity-30" />
      <small className="mb-8 inline-block">
        <Moment format="dddd, MMMM DD, YYYY">{postedOn}</Moment>
      </small>
      <br />
      <Link href={`/blog/${slug}`}>
        <a className="bg-[#00FFA5] -bottom-5 absolute rounded-3xl text-black text-sm uppercase mb-2 inline-block p-2 hover:text-black hover:bg-white">
          Read More
        </a>
      </Link>
    </div>
  );
};

export default BlogPost;
