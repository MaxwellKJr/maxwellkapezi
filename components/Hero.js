import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col w-full h-screen m-auto text-black bg-center bg-cover bg-hero-img">
      <div className="bg-black bg-opacity-30 w-full h-full">
        <div className="flex flex-row items-center w-full h-full px-4 mx-auto md:px-0 md:w-3/4 justify-items-start">
          <div className="p-4 bg-white rounded backdrop-blur bg-opacity-50 md:w-1/2">
            <h1 className="text-2xl mb-4 md:text-4xl font-black font-baskerville">
              Maxwell Kapezi, Jr.
            </h1>

            <div className="font-poppins">
              <p className="mb-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique quas veniam sint labore accusamus quis iure nostrum
                sit eaque officiis!
              </p>
              <p className="mb-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mb-3 text-sm">
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

export default Hero;
