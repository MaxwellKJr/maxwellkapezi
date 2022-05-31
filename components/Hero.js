import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col w-full m-auto bg-hero-img bg-cover h-screen bg-center text-white">
      <div className="w-full px-4 md:px-0 md:w-3/4 h-full flex flex-row justify-items-start items-center mx-auto">
        <div className="w-1/2">
          <h1 className="font-serif text-3xl font-semibold">Maxwell Kapezi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quas veniam sint labore accusamus quis iure nostrum sit eaque
            officiis!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            esse vel impedit earum natus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
