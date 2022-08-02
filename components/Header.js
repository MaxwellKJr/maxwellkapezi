import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const router = useRouter();

  return (
    <header className="py-4 bg-black backdrop-blur-lg bg-opacity-50 text-white font-bold fixed left-0 top-0 w-full z-50">
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full px-4 md:px-0 m-auto md:w-3/4 max-w-screen-lg">
        <nav>
          <ul className="flex flex-row items-center">
            <li>
              <Link href="/">
                <a
                  className={
                    router.pathname == "/"
                      ? "text-primary uppercase text-xs p-4"
                      : "text-white uppercase text-xs p-4"
                  }
                  title="Home"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className={
                    router.pathname == "/blog"
                      ? "text-primary uppercase text-xs p-4"
                      : "text-white uppercase text-xs p-4"
                  }
                  title="Blog"
                >
                  On Writing
                </a>
              </Link>
            </li>
            <li>
              <Link href="/books">
                <a
                  className={
                    router.pathname == "/books"
                      ? "text-primary uppercase text-xs p-4"
                      : "text-white uppercase text-xs p-4"
                  }
                  title="What to read"
                >
                  Books
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={
                    router.pathname == "/about"
                      ? "text-primary uppercase text-xs p-4"
                      : "text-white uppercase text-xs p-4"
                  }
                  title="Know the author"
                >
                  About
                </a>
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
