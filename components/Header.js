import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="justify-center items-center w-full m-auto bg-black">
      <nav className="justify-center items-center w-full m-auto">
        <ul className="items-center w-1/2">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/books">
              <a>Books</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
