import React from "react";
import Link from "next/link";
import Moment from "react-moment";
import Image from "next/image";

const BlogPost = ({ post }) => {
  const { title, description, slug, featuredImage, tag, postedOn } = post;

  return (
    <div className="rounded-lg relative bg-black bg-opacity-50 p-4 text-white shadow-md shadow-secondary lg:hover:scale-105 transition ease-in-out mb-8 hover:cursor-default">
      <Link href={`/blog/${slug}`}>
        <a>
          <Image
            src={`http://localhost:1337${featuredImage.formats.small.url}`}
            alt={featuredImage.alternativeText}
            width={featuredImage.formats.small.width}
            height={featuredImage.formats.small.height}
            blurDataURL
            placeholder="blur"
            className="rounded-lg"
          />
        </a>
      </Link>
      <Link href={`/blog/${slug}`}>
        <a>
          <h3 className="text-2xl font-black font-poppins">{title}</h3>
        </a>
      </Link>
      <p className="py-4 text-sm">{description}</p>
      <small className="bg-black bg-opacity-75 inline-block px-2 rounded-lg text-primary text-xs">
        {tag}
      </small>
      <hr className="my-2 opacity-30" />
      <small className="mb-8 inline-block">
        <Moment format="dddd, MMMM DD, YYYY">{postedOn}</Moment>
      </small>
      <br />
      <Link href={`/blog/${slug}`}>
        <a className="bg-primary -bottom-5 absolute rounded-3xl text-black text-sm uppercase mb-2 inline-block p-2 hover:text-black hover:bg-white">
          Read More
        </a>
      </Link>
    </div>
  );
};

export default BlogPost;
