import Link from "next/link";
import Image from "next/image";
import bookImage from "../public/img/The Man in Me.jpg";

const BookCard = () => {
  return (
    <div className="rounded bg-black backdrop-blur bg-opacity-50 p-4 text-white hover:shadow-lg hover:scale-105 transition ease-in-out mb-4 hover:cursor-default">
      <Link href="/">
        <a>
          <Image src={bookImage} alt="The Man in Me thumbnail" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <h3 className="text-2xl font-poppins font-black">
            The Man in Me: A Poetic Story
          </h3>
        </a>
      </Link>
      {/* <p className="py-4 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        ipsa. Ab quod ad quia necessitatibus!
      </p> */}
      {/* <Link href="/">
        <a className="text-[#00FFA5]">See Description...</a>
      </Link> */}
      <br />
      <hr className="my-2 opacity-30" />
      <small>Published On: 6th July, 2022</small>
    </div>
  );
};

export default BookCard;
