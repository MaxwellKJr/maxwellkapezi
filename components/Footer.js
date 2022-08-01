import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0C1519] p-4">
      <div className="uppercase font-light w-full h-full px-4 mx-auto md:px-0 md:w-3/4 text-gray-300 text-center sm:text-left max-w-screen-lg">
        <small>Copyright &copy; 2022 - Maxwell Kapezi </small>
        <br />
        <small>
          Developed by{" "}
          <a
            className="font-bold"
            href="http://mjcodes.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJ Codes
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
