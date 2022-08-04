import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const ArticleBlockBook = ({ book }) => {
  const {
    bookName,
    bookCover,
    bookPDF,
    description,
    summary,
    publishedOn,
    price,
    pages,
  } = book;

  const markdown = description;

  const finalPrice = price === null ? `Free` : `Buy: K${price}`;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ delay: 0.3, type: "tween" }}
      className="w-full px-4 sm:w-3/4 lg:w-3/4 mx-auto max-w-screen-lg"
    >
      <div className="flex flex-col justify-start items-center lg:justify-between lg:items-start lg:flex-row">
        <div className="rounded-lg bg-black bg-opacity-50 p-4 lg:pr-4 md:w-7/12 text-center lg:text-left">
          {/* Book Meta Data */}
          <Image
            src={`https://murmuring-tor-19815.herokuapp.com${bookCover.formats.large.url}`}
            alt={bookCover.alternativeText}
            width={bookCover.formats.large.width}
            height={bookCover.formats.large.height}
            blurDataURL
            placeholder="blur"
          />
          <h3 className="text-xl mt-4 font-black block lg:hidden mb-4 md:text-xl text-white font-poppins text-center lg:text-left uppercase">
            {bookName}
          </h3>
          <ul>
            <li className="text-sm mb-1 text-zinc-200">
              Published on:{" "}
              <Moment format="MMMM DD, YYYY">{publishedOn}</Moment>
            </li>
            <li className="text-sm mb-1 text-zinc-200">Pages: {pages}</li>
            <li className="text-sm mb-1 text-zinc-200">Available: {`Yes`}</li>
            <li className="rounded inline-flex text-secondary font-bold text-xl md:text-3xl my-2 py-2 px-4 bg-primary md:w-full md:inline-block md:text-center">
              {finalPrice}
            </li>
            <li>
              <a
                href={`https://murmuring-tor-19815.herokuapp.com${bookPDF.url}`}
                download={bookPDF.name}
              ></a>
            </li>
          </ul>
        </div>
        <article className="prose dark:prose-invert lg:prose-base w-full my-8 lg:mt-0 lg:pl-8">
          <h2 className="text-2xl hidden lg:block mb-4 md:text-3xl text-white font-poppins font-semibold text-center lg:text-left uppercase">
            {bookName}
          </h2>
          <p className="text-gray-100">
            <em>{summary}</em>
          </p>
          <div className="text-white">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default ArticleBlockBook;
