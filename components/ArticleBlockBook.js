import React from "react";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

const ArticleBlockBook = ({ book }) => {
  const { bookName, description, publishedOn, price } = book;

  return (
    <article className="prose dark:prose-invert lg:prose-base w-full px-4 sm:w-3/4 md:prose-w-2/5 mx-auto">
      <small className="text-md">
        Posted On: <Moment format="MMMM DD, YYYY">{publishedOn}</Moment>
      </small>
      {bookName}
      <article>{description}</article>
      <div>Price: {`K${price}`}</div>
    </article>
  );
};

export default ArticleBlockBook;
