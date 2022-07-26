import React from "react";

const AboutHero = () => {
  return (
    <section className="flex flex-col w-full m-auto bg-hero-img bg-cover h-screen bg-center text-black">
      <div className="bg-[#003120] bg-opacity-70 w-full h-full">
        <div className="w-full px-5 md:px-0 md:w-3/4 h-full flex flex-row justify-items-start items-center mx-auto">
          <div className="bg-white backdrop-blur rounded bg-opacity-70 md:w-1/2 p-4">
            <h1 className="text-2xl mb-4 md:text-4xl font-black font-baskerville">
              <em>Who is Maxwell Kapezi?</em>
            </h1>

            <div className="font-poppins">
              <p className="text-md mb-4">
                Born and raised in the Warm Heart of Africa, Malawi, Maxwell
                Kapezi
              </p>
              <p className="text-md mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-md mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                esse vel impedit earum natus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
