"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation"; 
import { FaCode, FaGraduationCap, FaCertificate, FaClipboardList } from 'react-icons/fa'; // Import icons

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <FaCode className="inline-block mr-2" />, // Icon for Skills
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <FaGraduationCap className="inline-block mr-2" />, // Icon for Education
    content: (
      <ul className="list-disc pl-2">
        <li>Graduation</li>
        <li>Karachi University</li>
        <li>Web3.0</li>
        <li>Governor House Karachi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <FaCertificate className="inline-block mr-2" />, // Icon for Certifications
    content: (
      <ul className="list-disc pl-2">
        <li>DigiSkills</li>
        <li>Udemy</li>
        <li>Google Garage</li>
        <li>Governor House Karachi</li>
      </ul>
    ),
  },
  {
    title: "Expertise",
    id: "expertise",
    icon: <FaClipboardList className="inline-block mr-2" />, 
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development</li>
        <li>Responsive Design</li>
        <li>UI/UX Design</li>
        <li>Problem Solving</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#121212] text-white">
      <div className="md:grid md:grid-cols-2 items-center py-8 px-4 xl:px-16">
        {/* About Image */}
        <Image
          src="/assets/aboutme.png"
          alt="profile-image"
          width={500}
          height={500}
        />

        {/* About Me Text */}
        <div className="text-center md:text-left">
          <TypeAnimation
            sequence={["About Me", 1000]}
            wrapper="h2"
            speed={50}
            className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text"
            style={{
              lineHeight: "2",
              marginBottom: "1rem",
            }}
            repeat={Infinity}
          />
          <p className="text-base lg:text-lg">
            I&apos;m a passionate web developer with experience in building modern
            and responsive websites using the latest technologies. I enjoy
            turning complex problems into simple, beautiful, and intuitive
            designs.
          </p>

          {/* Bricks Layout for Tabs */}
          <div className="grid grid-cols-2 justify-center ml-10 gap-2 mt-4">
            {/* Tab Block 1 - Skills */}
            <div
              className={`p-4 w-2/3 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 transition-shadow duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
              onMouseEnter={() => {
                document.getElementById('skills-content')!.style.display = 'block';
              }}
              onMouseLeave={() => {
                document.getElementById('skills-content')!.style.display = 'none';
              }}
            >
              <h3 className="text-lg font-bold">
                {TAB_DATA[0].icon}
                {TAB_DATA[0].title}
              </h3>
              <div id="skills-content" className="mt-2" style={{ display: 'none' }}>
                {TAB_DATA[0].content}
              </div>
            </div>

            {/* Tab Block 2 - Education */}
            <div
              className={`p-4 w-3/2 -ml-20 mr-24 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 transition-shadow duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
              onMouseEnter={() => {
                document.getElementById('education-content')!.style.display = 'block';
              }}
              onMouseLeave={() => {
                document.getElementById('education-content')!.style.display = 'none';
              }}
            >
              <h3 className="text-lg font-bold">
                {TAB_DATA[1].icon}
                {TAB_DATA[1].title}
              </h3>
              <div id="education-content" className="mt-2" style={{ display: 'none' }}>
                {TAB_DATA[1].content}
              </div>
            </div>

            {/* Tab Block 3 - Certifications */}
            <div
              className={`p-4 w-3/2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 transition-shadow duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
              onMouseEnter={() => {
                document.getElementById('certifications-content')!.style.display = 'block';
              }}
              onMouseLeave={() => {
                document.getElementById('certifications-content')!.style.display = 'none';
              }}
            >
              <h3 className="text-lg font-bold">
                {TAB_DATA[2].icon}
                {TAB_DATA[2].title}
              </h3>
              <div id="certifications-content" className="mt-2" style={{ display: 'none' }}>
                {TAB_DATA[2].content}
              </div>
            </div>

            {/* Tab Block 4 - Expertise */}
            <div
              className={`p-4 w-2/3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 transition-shadow duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
              onMouseEnter={() => {
                document.getElementById('expertise-content')!.style.display = 'block';
              }}
              onMouseLeave={() => {
                document.getElementById('expertise-content')!.style.display = 'none';
              }}
            >
              <h3 className="text-lg font-bold">
                {TAB_DATA[3].icon}
                {TAB_DATA[3].title}
              </h3>
              <div id="expertise-content" className="mt-2" style={{ display: 'none' }}>
                {TAB_DATA[3].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
