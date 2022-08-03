import Image from "next/image";
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
    description,
    publishedOn,
    price,
    pages,
    isPublished,
  } = book;

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
        <div className="pr-4 md:w-7/12 text-center lg:text-left">
          {/* Book Meta Data */}
          <Image
            src={`http://localhost:1337${bookCover.formats.large.url}`}
            alt={bookCover.alternativeText}
            width={bookCover.formats.large.width}
            height={bookCover.formats.large.height}
            blurDataURL
            placeholder="blur"
          />
          <ul>
            <li className="text-md mb-2">
              Published on:{" "}
              <Moment format="MMMM DD, YYYY">{publishedOn}</Moment>
            </li>
            <li className="text-md mb-2">Pages: {pages}</li>
            <li className="text-md mb-2">Available: {`Yes`}</li>
            <li className="text-secondary font-bold text-xl md:text-3xl my-2 py-2 px-4 bg-primary inline-block">
              Price: {`K${price}`}
            </li>
          </ul>
        </div>
        <article className="w-full my-8 lg:mt-0 lg:pl-4">
          <h2 className="text-2xl mb-4 md:text-3xl text-white font-poppins font-semibold text-center lg:text-left uppercase">
            {bookName}
          </h2>
          <p className="">{description}</p>
        </article>
      </div>
    </motion.div>
  );
};

export default ArticleBlockBook;
