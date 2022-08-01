import Image from "next/image";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

const ArticleBlockBook = ({ book }) => {
  const { bookName, description, publishedOn, price, bookCover } = book;
  console.log(bookCover.formats.medium.url);
  return (
    <article className="w-full px-4 sm:w-3/4 lg:w-2/5 mx-auto">
      <small className="text-md">
        Published On: <Moment format="MMMM DD, YYYY">{publishedOn}</Moment>
      </small>
      <div className="flex flex-col lg:flex-row">
        <div className="pr-4 w-1/4">
          {/* Book Meta Data */}
          <Image
            src={`http://localhost:1337${bookCover.formats.medium.url}`}
            alt={bookCover.alternativeText}
            width={bookCover.formats.large.width}
            height={bookCover.formats.large.height}
            blurDataURL
          />
          <p className="font-bold text-lg">Price: {`K${price}`}</p>
        </div>
        <article className="w-3/4">
          <p className="">{description}</p>
        </article>
      </div>
    </article>
  );
};

export default ArticleBlockBook;
