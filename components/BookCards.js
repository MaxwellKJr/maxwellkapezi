import Link from "next/link";
import { fetcher } from "../lib/api";
import BookCard from "./BookCard";

const BooksCards = ({ books }) => {
  return (
    <section className="flex flex-col w-full m-auto bg-gradient-to-bl from-gray-800 to-[#003120] text-black ">
      <div className="w-full h-full">
        <div className="w-full px-5 pb-20 pt-40 sm:pt-24 md:px-0 md:w-3/4 h-full flex flex-col justify-center items-center mx-auto">
          <h1 className="text-2xl mb-4 md:text-4xl text-white font-black font-baskerville text-center uppercase">
            <em>Books</em>
          </h1>

          <div className="">
            {/* blog posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-4 my-2 font-poppins">
              {books &&
                books.data.map((book) => {
                  return <BookCard key={book.id} book={book} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksCards;
