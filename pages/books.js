import Head from "next/head";
import BooksCards from "../components/BookCards";

const Books = () => {
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
      <main>
        <BooksCards />
      </main>
    </>
  );
};

export default Books;
