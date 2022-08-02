import React from "react";
import Image from "next/image";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

const ArticleBlock = ({ post }) => {
  const { featuredImage, body, postedOn } = post;
  const markdown = body;

  return (
    <article className="prose dark:prose-invert lg:prose-base w-full px-4 sm:w-3/4 md:prose-w-2/5 mx-auto">
      <Image
        src={`http://localhost:1337${featuredImage.formats.small.url}`}
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
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  );
};

export default ArticleBlock;
