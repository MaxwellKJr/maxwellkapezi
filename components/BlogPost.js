import React from "react";
import Link from "next/link";
import Moment from "react-moment";

const BlogPost = ({ post }) => {
  const { title, description, slug, postedOn } = post.attributes;

  return (
    <div className="rounded bg-black backdrop-blur bg-opacity-50 p-4 text-white hover:shadow-lg hover:scale-105 transition ease-in-out mb-4 hover:cursor-default">
      <Link href={`/blog/${slug}`}>
        <a>
          <h3 className="text-3xl font-baskerville">{title}</h3>
        </a>
      </Link>
      <p className="py-4 text-sm">{description}</p>

      <Link href={`/blog/${slug}`}>
        <a className="text-[#00FFA5]">Read More...</a>
      </Link>
      <br />
      <hr className="my-2 opacity-30" />
      <small>
        <Moment format="MMM dd, YYYY">{postedOn}</Moment>
      </small>
    </div>
  );
};

export default BlogPost;
