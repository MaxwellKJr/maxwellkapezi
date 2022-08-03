import React from "react";
import Link from "next/link";
import Moment from "react-moment";
import Image from "next/image";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BlogPost = ({ post }) => {
  const { title, description, slug, featuredImage, tag, postedOn } = post;

  return (
    <motion.div className="rounded-md relative bg-black bg-opacity-50 text-white lg:hover:scale-95 transition-all ease-in-out mb-16 hover:cursor-default">
      <Link href={`/blog/${slug}`}>
        <a>
          <Image
            src={`https://murmuring-tor-19815.herokuapp.com${featuredImage.formats.small.url}`}
            alt={featuredImage.alternativeText}
            width={featuredImage.formats.small.width}
            height={featuredImage.formats.small.height}
            blurDataURL
            placeholder="blur"
            title={title}
            className="rounded-md rounded-b-none hover:opacity-75 transition"
          />
        </a>
      </Link>
      <div className="p-4">
        <Link href={`/blog/${slug}`}>
          <a>
            <h3 className="text-2xl font-black font-poppins">{title}</h3>
          </a>
        </Link>
        <p className="py-4 text-sm text-zinc-300">{description}</p>
        <small className="bg-black bg-opacity-75 inline-block px-2 rounded-lg text-primary text-xs">
          {tag}
        </small>
        <hr className="my-2 opacity-50" />
        <small className="mb-8 inline-block">
          <Moment format="dddd, MMMM DD, YYYY">{postedOn}</Moment>
        </small>
        <br />
        <Link href={`/blog/${slug}`}>
          <a className="bg-primary -bottom-6 absolute rounded-3xl text-black text-sm uppercase mb-2 inline-block py-2 px-6 hover:text-black hover:bg-white">
            Read More
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogPost;
