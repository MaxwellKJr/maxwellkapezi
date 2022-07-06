import Link from "next/link";
import React from "react";
import BlogPost from "./BlogPost";

const BlogPosts = () => {
  return (
    <section className="flex flex-col w-full m-auto bg-hero-img bg-cover h-screen bg-center text-black">
      <div className="bg-black bg-opacity-70 w-full h-full">
        <div className="w-full px-5 md:px-0 md:w-3/4 h-full flex flex-col justify-center items-center mx-auto">
          <h1 className="text-2xl mb-4 md:text-4xl text-white font-black font-baskerville text-center">
            <em>Blog Posts</em>
          </h1>

          <div className="bg-black backdrop-blur-md bg-opacity-50 p-5 text-white">
            {/* blog posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-4 my-2 font-poppins">
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
