

import React from "react";

const Outro = () => {
  return (
    <div className="outro_container bg-gradient-to-br from-turquoise-600 to-teal-500 dark:from-green-900 dark:to-blue-900 border border-teal-500 py-1 px-2 rounded-md  text-center mx-auto w-10/12 sm:w-8/12 md:w-auto">
      <a
        href="https://www.nivarix.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="snap-outro text-white text-sm md:text-base font-light hover:text-teal-200 transition-colors duration-300 block md:inline-block"
      >
        Made with <span className="text-red-500">❤️</span> by Nivarix
        Tech&trade;
      </a>
    </div>
  );
};

export default Outro;