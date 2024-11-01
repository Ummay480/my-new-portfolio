"use client"; // Ensure this is the first line in the file
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        {/* Text Section */}
        <div className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left px-4">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
              Hello, I am{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Ummay",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block", lineHeight: "1" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I create modern, responsive websites that combine creativity and technical skill. With a focus on web development and UI/UX design, I bring ideas to life with seamless digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-red-500 via-yellow-600 to-pink-800 hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-red-600 to-yellow-800 hover:bg-slate-800 text-white border border-white">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">Download CV</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-12 sm:col-span-5 place-self-center mt-8 lg:mt-0 px-4">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] relative mx-auto">
            <Image
              src="/assets/ummay.jpeg"
              alt="profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={200}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
