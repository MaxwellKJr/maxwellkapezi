import React from "react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="py-4 bg-black backdrop-blur-lg bg-opacity-50 text-white font-bold fixed left-0 top-0 w-full z-50">
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full px-4 md:px-0 m-auto md:w-3/4">
        <nav>
          <ul className="flex flex-row items-center">
            <li>
              <Link href="/">
                <a className="uppercase text-xs ml-0 p-4">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="uppercase text-xs p-4">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/books">
                <a className="uppercase text-xs p-4">Books</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="uppercase text-xs p-4">About</a>
              </Link>
            </li>
          </ul>
        </nav>

        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
