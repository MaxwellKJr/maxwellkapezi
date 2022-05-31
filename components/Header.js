import React from "react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row py-4 bg-gray-800 text-white font-bold fixed left-0 top-0 w-full z-50">
      <nav className="flex flex-row justify-center items-center w-full m-auto">
        <ul className="flex flex-row justify-evenly items-center w-1/2">
          <li>
            <Link href="/">
              <a className="uppercase text-xs py-4">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="uppercase text-xs py-4">About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="uppercase text-xs py-4">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/books">
              <a className="uppercase text-xs py-4">Books</a>
            </Link>
          </li>
        </ul>
      </nav>
      <SocialLinks />
    </header>
  );
};

export default Header;
