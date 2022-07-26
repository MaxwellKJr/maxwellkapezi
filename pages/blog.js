import Head from "next/head";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";
import { fetcher } from "../lib/api";

export async function getStaticProps() {
  //get Books from the API, from strapi books

  const postsResponse = await fetcher(
    //order the books by published date in descending order
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogPosts?_sort=postedOn:DESC`
  );

  return {
    props: {
      posts: postsResponse,
    },
  };
}

const Blog = ({ posts }) => {
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
      <BlogPosts posts={posts} />
      <Footer />
    </>
  );
};

export default Blog;
