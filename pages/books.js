import Head from "next/head";
import BooksCards from "../components/BookCards";
import Footer from "../components/Footer";
import { fetcher } from "../lib/api";

export async function getStaticProps() {
  //get Books from the API, from strapi books

  const booksResponse = await fetcher(
    //order the books by published date in descending order
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/books?fields=bookName,slug,publishedOn&sort=publishedOn:DESC&populate=bookCover`
  );

  return {
    props: {
      books: booksResponse,
    },
    revalidate: 10,
  };
}

const Books = ({ books }) => {
  return (
    <>
      <Head>
        <title>Books | Maxwell Kapezi Jr</title>
        <meta
          name="description"
          content="See, buy, and download books written by the Malawian writer, Maxwell Kapezi Jr."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-20">
        <BooksCards books={books} />
      </main>
    </>
  );
};

export default Books;
