"use client"
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const profiles = [
  { id: 1, src: '/path/to/image1.jpg', alt: 'Profile 1' },
  { id: 2, src: '/path/to/image2.jpg', alt: 'Profile 2' },
  { id: 3, src: '/path/to/image3.jpg', alt: 'Profile 3' },
  { id: 4, src: '/path/to/image4.jpg', alt: 'Profile 4' },
  { id: 5, src: '/path/to/image5.jpg', alt: 'Profile 5' },
  { id: 6, src: '/path/to/image6.jpg', alt: 'Profile 6' },
  { id: 7, src: '/path/to/image7.jpg', alt: 'Profile 7' },
];

const CircularProfileComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="relative w-80 h-80 flex items-center justify-center">
        
        {/* Central Profile */}
        <div className="absolute w-32 h-32 rounded-full border-4 border-gray-700 flex flex-col items-center justify-center bg-gray-800 z-10">
          <Image
            src="/path/to/center-profile.jpg" // central profile image
            alt="Center Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="text-center mt-2">
            <p className="font-bold">Someone Famous</p>
            <p className="text-xs text-gray-400">Product Designer</p>
          </div>
          <div className="flex mt-2 space-x-2 text-blue-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Outer Circle of Profiles */}
        <div className="absolute w-full h-full flex justify-center items-center">
          {profiles.map((profile, index) => {
            const angle = (360 / profiles.length) * index;
            const radians = (angle * Math.PI) / 180;
            const x = 100 * Math.cos(radians);
            const y = 100 * Math.sin(radians);

            return (
              <div
                key={profile.id}
                className="absolute"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <Image
                  src={profile.src}
                  alt={profile.alt}
                  width={60}
                  height={60}
                  className="rounded-full border-4 border-gray-700"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularProfileComponent;
