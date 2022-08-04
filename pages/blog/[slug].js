import React from "react";
import Head from "next/head";
import { fetcher } from "../../lib/api";
import ArticleBlock from "../../components/ArticleBlock";
import OtherPosts from "../../components/OtherPosts";
import Footer from "../../components/Footer";

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const blogPostsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogPosts?_sort=postedOn:DESC`
  );

  // Get the paths we want to pre-render based on posts
  const paths = blogPostsResponse.data.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  const { slug } = params;

  // If the route is like /posts/1, then params.id is 1
  const blogPost = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogPosts?filters[slug][$eq]=${slug}&populate=featuredImage`
  );

  const otherPosts = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogPosts?fields=title,slug`
  );

  // Pass post data to the page via props
  return {
    props: { post: blogPost.data[0], otherPosts: otherPosts },
    revalidate: 60,
  };
}

const Post = ({ post, otherPosts }) => {
  const { title, description, slug } = post;
  return (
    <>
      <Head>
        <title>{title} | Maxwell Kapezi Jr</title>
        <meta name="description" content={description} />
      </Head>

      <section className="flex flex-col w-full m-auto bg-gradient-to-bl from-gray-800 to-secondary text-white pt-20 lg:pt-16 max-w-screen-lg">
        <div className="w-full h-full">
          <div className="w-full pb-20 pt-40 sm:pt-24 md:px-0 h-full flex flex-col justify-center items-center">
            {/* <div className="">
              <Breadcrumbs
                useDefaultStyle={true}
                rootLabel="Home"
                labelsToUppercase={true}
                containerClassName="bg-primary mb-4 text-sm hidden"
                listClassName="text-sm"
              />
            </div> */}
            {/* <h2 className="text-2xl mb-4 md:text-4xl text-white font-poppins font-semibold text-center uppercase">
              {title}
            </h2> */}
            <div className="flex flex-col lg:flex-row justify-center items-start lg:justify-start lg:items-start">
              {/* blog posts */}

              <ArticleBlock key={slug} post={post} />
              <div className="w-full px-4 sm:w-3/4 lg:w-2/5 mx-auto">
                <OtherPosts otherPosts={otherPosts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
