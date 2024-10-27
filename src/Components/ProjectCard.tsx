"use client"; 

import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  imageSrc: string; // Project image
  logoSrc?: string; // Optional logo image
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, logoSrc, link }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 reflected-border">
      {/* Reflected Gradient Border */}
      <div className="border-4 border-transparent rounded-lg bg-gradient-to-r from-red-600 to-yellow-600 p-1 reflected-border">
        <div className="bg-black rounded-lg">
          
          {/* Header with gradient background, title, and logo */}
          <div className="flex justify-between items-center bg-gradient-to-r from-red-600 to-yellow-600 p">
            <h2 className="text-xl font-bold text-white">
              {title}
            </h2>
            {logoSrc && (
              <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden">
                <Image
                  src={logoSrc}
                  alt="logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Main Image */}
          <div className="relative w-full h-48">
            <Image
              src={imageSrc}
              alt={title}
              width={500}
              height={400}
              className="w-full h-full object-cover mt-0"
            />
          </div>

          {/* Card Content */}
          <div className="flex justify-between items-center bg-gradient-to-r from-red-600 to-yellow-600 ">
            {/* Link to project */}
            <a
              href={link}
              className="text-sm font-bold text-white hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
