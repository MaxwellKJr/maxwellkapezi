import React from "react";
import Image from "next/image";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const ArticleBlock = ({ post }) => {
  const { featuredImage, body, postedOn } = post;
  const markdown = body;

  return (
    <motion.article
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ delay: 0.3, type: "tween" }}
      className="prose dark:prose-invert lg:prose-base w-full px-4 sm:w-3/4 md:prose-w-2/5 mx-auto"
    >
      <Image
        src={`https://murmuring-tor-19815.herokuapp.com${featuredImage.formats.small.url}`}
        alt={featuredImage.alternativeText}
        width={featuredImage.formats.small.width}
        height={featuredImage.formats.small.height}
        blurDataURL
        placeholder="blur"
      />
      <br />
      <small className="text-md p-2 pl-0">
        Posted On: <Moment format="MMMM DD, YYYY">{postedOn}</Moment>
      </small>
      <div className="text-white">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </motion.article>
  );
};

export default ArticleBlock;
