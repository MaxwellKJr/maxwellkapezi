import React from "react";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

const ArticleBlock = ({ post }) => {
  const { title, description, body, postedOn } = post;
  const markdown = body;

  return (
    <article className="prose dark:prose-invert lg:prose-base w-full px-4 sm:w-3/4 md:prose-w-2/5 mx-auto">
      <h3 className="text-4xl font-black">{title}</h3>
      <small className="text-md">
        Posted On: <Moment format="MMMM DD, YYYY">{postedOn}</Moment>
      </small>
      <p className="text-md italic my-4">{description}</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  );
};

export default ArticleBlock;
