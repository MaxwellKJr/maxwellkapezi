import React from "react";
import Head from "next/head";
import { fetcher } from "../../lib/api";
import ArticleBlock from "../../components/ArticleBlock";

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const blogPostsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogPosts?_sort=postedOn:DESC`
  );

  // Get the paths we want to pre-render based on posts
  const paths = blogPostsResponse.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  const { slug } = params;

  // If the route is like /posts/1, then params.id is 1
  const blogPosts = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogPosts?slug=${slug}`
  );

  // Pass post data to the page via props
  return { props: { post: blogPosts.data[0].attributes } };
}

const Post = ({ post }) => {
  const { title, description, body, postedOn, slug } = post;

  return (
    <>
      <Head>
        <title>{title} | Maxwell Kapezi Jr</title>
        <meta name="description" content={description} />
      </Head>

      <section className="flex flex-col w-full m-auto bg-gradient-to-bl from-gray-800 to-[#003120] text-white ">
        <div className="w-full h-full">
          <div className="w-full px-5 pb-20 pt-40 sm:pt-24 md:px-0 h-full flex flex-col justify-center items-center">
            {/* <h2 className="text-2xl mb-4 md:text-4xl text-white font-poppins font-semibold text-center uppercase">
              {title}
            </h2> */}

            <div className="">
              {/* blog posts */}

              <ArticleBlock key={slug} post={post} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;