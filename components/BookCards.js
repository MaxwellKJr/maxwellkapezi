import Link from "next/link";
import { fetcher } from "../lib/api";
import BookCard from "./BookCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      type: "tween",
    },
  },
};

const BooksCards = ({ books }) => {
  return (
    <section className="flex flex-col w-full m-auto bg-gradient-to-bl from-gray-800 to-secondary text-black">
      <div className="w-full h-full">
        <div className="w-full px-2 pb-20 pt-40 sm:pt-24 md:px-0 md:w-3/4 h-full flex flex-col justify-center items-center mx-auto max-w-screen-lg">
          <h1 className="text-2xl mb-4 md:text-4xl text-white font-black font-baskerville text-center uppercase">
            <em>Books</em>
          </h1>

          <div className="">
            {/* blog posts */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mx-4 sm:gap-4 my-4 font-poppins"
            >
              {books &&
                books.data.map((book) => {
                  return <BookCard key={book.id} book={book} />;
                })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksCards;
