import Link from "next/link";
import React from "react";
import BlogPost from "./BlogPost";

const BlogPosts = () => {
  return (
    <section className="flex flex-col w-full m-auto bg-hero-img h-1/2 bg-cover bg-center text-black">
      <div className="bg-black bg-opacity-50 w-full h-full">
        <div className="w-full px-5 md:px-0 md:w-3/4 h-full flex flex-col justify-center items-center mx-auto">
          <h1 className="text-2xl mb-4 md:text-4xl text-white font-black font-baskerville text-center">
            <em>Blog Posts</em>
          </h1>

          <div className="">
            {/* blog posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-4 my-2 font-poppins">
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
