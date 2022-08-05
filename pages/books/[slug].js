import React from "react";
import Head from "next/head";
import { fetcher } from "../../lib/api";
import ArticleBlockBook from "../../components/ArticleBlockBook";
import OtherBooks from "../../components/OtherBooks";
import Footer from "../../components/Footer";

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const booksResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/books?_sort=published:DESC`
  );

  // Get the paths we want to pre-render based on posts
  const paths = booksResponse.data.map((book) => ({
    params: { slug: book.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  const { slug } = params;

  // If the route is like /posts/1, then params.id is 1
  const bookPath = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/books?filters[slug][$eq]=${slug}&populate=bookCover,bookPDF`
  );

  const otherBooks = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/books?fields=bookName,slug`
  );

  // Pass post data to the page via props
  return {
    props: { book: bookPath.data[0], otherBooks: otherBooks },
    revalidate: 10,
  };
}

const Book = ({ book }) => {
  const { bookName, description, slug } = book;

  return (
    <>
      <Head>
        <title>{bookName} | Maxwell Kapezi Jr</title>
        <meta name="description" content={description} />
      </Head>

      <main className="flex flex-col w-full m-auto bg-gradient-to-bl from-gray-800 to-secondary text-white pt-8 lg:pt-16">
        <div className="w-full h-full">
          <div className="w-full pb-20 pt-40 sm:pt-24 md:px-0 h-full flex flex-col justify-center items-center">
            <div className="flex flex-col lg:flex-row justify-center items-start lg:justify-start lg:items-start">
              {/* blog posts */}

              <ArticleBlockBook key={slug} book={book} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Book;
