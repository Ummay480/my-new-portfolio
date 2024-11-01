"use client";
import React from "react";
import ContactButtons from "./ContactButtons"


const Contacts = () => {
  return (
    <footer className="bg-[#121212] py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-4">
            <h2  className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">
              Let&apos;s Connect
            </h2>
            <p className="text-[#ADB7BE] text-sm mt-2">
              Follow me on social media or reach out via email!
            </p>
            {/* Social media icons moved under the <p> */}
            <div className="flex space-x-4 mt-4 justify-center">
              <a
                href="https://www.linkedin.com/in/ummaykulsoom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                </a>
              <div>
              <ContactButtons/>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-[#ADB7BE]">
 </div>
      </div>
    </footer>
    
  );
};

export default Contacts;
