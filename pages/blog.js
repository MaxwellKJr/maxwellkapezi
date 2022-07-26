import Head from "next/head";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Posts | Maxwell Kapezi Jr</title>
        <meta
          name="description"
          content="Read posts about writing, (his) books and works-in-progress by the Malawian writer, Maxwell Kapezi Jr."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPosts />
      <Footer />
    </>
  );
};

export default Blog;
