import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Hero = () => {
  return (
    <section className="flex flex-col w-full h-screen m-auto text-black bg-center bg-cover bg-hero-img">
      <div className="bg-black bg-opacity-30 w-full h-full">
        <div className="flex flex-row items-center w-full h-full px-4 mx-auto md:px-0 md:w-3/4 justify-items-start max-w-screen-lg">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ delay: 0.3, type: "tween" }}
            className="p-4 bg-black text-gray-200 mt-20 md:mt-0 rounded backdrop-blur-lg bg-opacity-50 md:w-1/2"
          >
            <h1 className="text-2xl mb-4 md:text-4xl text-white font-black font-baskerville">
              <em>Greetings!</em>
            </h1>

            <div className="font-poppins">
              <p className="mb-3 text-md">
                Welcome to the <span>official</span> website for{" "}
                <Link href="/about">
                  <a className="text-primary hover:underline font-semibold">
                    Maxwell Kapezi
                  </a>
                </Link>
                . A space where he shares his tips, writing process, and other
                work-in-progress updates.
              </p>
              <p className="mb-3 text-md">Takulandirani!</p>
              <p className="mb-3 text-md">
                You can start by checking out his{" "}
                <Link href="/books">
                  <a className="text-primary hover:underline font-semibold">
                    recent work here
                  </a>
                </Link>
                .
              </p>
            </div>

            {/* ctas */}
            <Link href="/books/maybe-tomorrow">
              <a className="bg-primary rounded-sm text-gray-900 hover:text-gray-800 font-semibold w-full text-center inline-block md:inline-flex flex-row items-center justify-center py-4">
                <em>{"Maybe Tomorrow (Coming Soon)"}</em>
                {/* <FontAwesomeIcon
                  icon={faDownload}
                  className="ml-4 h-5 hidden md:block"
                /> */}
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
