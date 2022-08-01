import Link from "next/link";
import Image from "next/image";
import bookImage from "../public/img/The Man in Me.jpg";
import Moment from "react-moment";
import { fetcher } from "../lib/api";

const BookCard = ({ book }) => {
  const { bookName, slug, publishedOn, bookCover } = book;

  console.log(bookCover);
  return (
    <div className="rounded bg-black bg-opacity-50 p-4 text-white hover:shadow-lg lg:hover:scale-105 transition ease-in-out mb-4 hover:cursor-default">
      <Link href={`/books/${slug}`}>
        <a>
          <Image
            src={`http://localhost:1337${bookCover.formats.small.url}`}
            alt="The Man in Me thumbnail"
            placeholder="blur"
            className="w-full"
            width={bookCover.formats.small.width}
            height={bookCover.formats.small.height}
            blurDataURL
          />
        </a>
      </Link>
      <Link href={`/books/${slug}`}>
        <a>
          <h3 className="text-lg font-poppins font-black">{bookName}</h3>
        </a>
      </Link>
      <br />
      <hr className="my-2 opacity-30" />
      <small>
        Published On: <Moment format="MMMM DD, YYYY">{publishedOn}</Moment>
      </small>
    </div>
  );
};

export default BookCard;
