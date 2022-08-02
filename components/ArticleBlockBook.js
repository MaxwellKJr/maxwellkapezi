import Image from "next/image";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

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
    <div className="w-full px-4 sm:w-3/4 lg:w-3/4 mx-auto max-w-screen-lg">
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
            <li className="text-[#003120] font-bold text-xl md:text-3xl my-2 py-2 px-4 bg-primary inline-block">
              Price: {`K${price}`}
            </li>
          </ul>
        </div>
        <article className="w-full my-8 lg:mt-0">
          <h2 className="text-2xl mb-4 md:text-4xl text-white font-poppins font-semibold text-center lg:text-left uppercase">
            {bookName}
          </h2>
          <p className="">{description}</p>
        </article>
      </div>
    </div>
  );
};

export default ArticleBlockBook;
