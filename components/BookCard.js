import Link from "next/link";
import Image from "next/image";
import bookImage from "../public/img/The Man in Me.jpg";
import Moment from "react-moment";

const BookCard = ({ book }) => {
  const { bookName, slug, bookCover, publishedOn } = book.attributes;
  // const { bookCover } = book.attributes.data;

  return (
    <div className="rounded bg-black backdrop-blur bg-opacity-50 p-4 text-white hover:shadow-lg hover:scale-105 transition ease-in-out mb-4 hover:cursor-default">
      <Link href={`/books/${slug}`}>
        <a>
          <Image
            src={bookImage}
            alt="The Man in Me thumbnail"
            placeholder="blur"
          />
        </a>
      </Link>
      <Link href={`/books/${slug}`}>
        <a>
          <h3 className="text-2xl font-poppins font-black">{bookName}</h3>
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
