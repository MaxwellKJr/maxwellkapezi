import Link from "next/link";
import Image from "next/image";
import Moment from "react-moment";

const BookCard = ({ book }) => {
  const { bookName, slug, publishedOn, bookCover } = book;

  return (
    <div className="rounded bg-black bg-opacity-50 p-4 text-white lg:hover:scale-95 transition-all ease-in-out mb-10 hover:cursor-default">
      <Link href={`/books/${slug}`}>
        <a>
          <Image
            src={`${process.env.STRAPI_URL}${bookCover.formats.small.url}`}
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
      <small>
        Published On: <Moment format="MMMM DD, YYYY">{publishedOn}</Moment>
      </small>
    </div>
  );
};

export default BookCard;
