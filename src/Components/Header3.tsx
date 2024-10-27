"use client";
import React from "react";
import Image from "next/image";

export const Header3: React.FC = () => {
  return (
    <div className="relative w-full px-4 py-4 md:py-6 bg-gradient-to-br from-red-600 to-yellow-600 flex flex-col items-center justify-center">
      
      {/* Icons at the top with adjusted margins */}
      <div className="relative flex flex-wrap justify-center items-center z-10 opacity-80 rounded-full mt-6 space-x-4 md:space-x-6">
        {/* Ecommerce Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 mt-6">
          <Image
            src="/assets/ecommerce.png"
            alt="ecommerce-Icon"
            width={150}
            height={100}
            className="w-20 md:w-28 lg:w-32"
          />
        </div>

        {/* API Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 mt-6">
          <Image
            src="/assets/api3.png"
            alt="api-Icon"
            width={150}
            height={100}
            className="w-20 md:w-28 lg:w-32"
          />
        </div>

        {/* Portfolio Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 mt-6">
          <Image
            src="/assets/portfolio1.png"
            alt="Portfolio Icon"
            width={150}
            height={100}
            className="w-20 md:w-28 lg:w-32"
          />
        </div>
      </div>

      {/* Main Project Image with Glass Effect */}
      <div className="relative flex justify-center items-center mt-6">
        {/* Project Image moved further to the left */}
        <div className="relative z-10 -ml-40">
          <Image
            src="/assets/projects.png"
            alt="Project"
            width={250}
            height={100}
            className="w-60 md:w-80 lg:w-96"
          />
        </div>

        {/* Glassmorphism Container overlapping the image (left aligned) */}
        <div className="absolute left-0 z-20 w-64 h-28 md:w-80 md:h-32 lg:w-96 lg:h-40 backdrop-blur-lg bg-white bg-opacity-20 shadow-md border border-white/10 rounded-lg flex items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            My Projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header3;
