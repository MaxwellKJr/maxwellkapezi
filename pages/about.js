import React from "react";

const About = () => {
  return (
    <section className="flex flex-col w-full m-auto bg-hero-img bg-cover h-screen bg-center text-black">
      <div className="w-full px-4 md:px-0 md:w-3/4 h-full flex flex-row justify-items-start items-center mx-auto">
        <div className="bg-white backdrop-blur rounded bg-opacity-50 md:w-1/2 p-4">
          <h1 className="font-baskerville font-black text-4xl mb-4">
            About Maxwell Kapezi Jr.
          </h1>

          <div className="font-poppins">
            <p className="text-sm mb-3">
              Born and raised in the Warm Heart of Africa, Malawi, Maxwell
              Kapezi
            </p>
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              esse vel impedit earum natus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
