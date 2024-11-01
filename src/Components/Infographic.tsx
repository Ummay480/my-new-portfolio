"use client";
import React, { FC } from 'react';

interface Project {
  title: string;
  src: string;
  color: string;
  link: string;
}

const projects: Project[] = [
  { title: 'To-Do List', src: '/assets/to-do-list.png', color: 'bg-teal-800', link: 'https://github.com/Ummay480/to-do' },
  { title: 'Simple Calculator', src: '/assets/calculator.png', color: 'bg-yellow-500', link: 'https://github.com/Ummay480/simple-calculator' },
  { title: 'Student Management', src: '/assets/student-management.png', color: 'bg-blue-500', link: 'https://github.com/Ummay480/student-management-system' },
  { title: 'Word Counter', src: '/assets/word-counter.jpg', color: 'bg-green-500', link: 'https://example.com/word-counter' },
  { title: 'CLI Guessing Game', src: '/assets/number-guessing-game.jpg', color: 'bg-pink-500', link: 'https://github.com/Ummay480/cli-number-guessing-game' },
  { title: 'ATM', src: '/assets/Atm.png', color: 'bg-red-500', link: 'https://github.com/Ummay480/atm' },
  { title: 'Currency Converter', src: '/assets/currency_converter.png', color: 'bg-purple-500', link: 'https://github.com/Ummay480/currency-convertor' },
];

const Infographic: FC = () => {
  return (
    <div className="relative w-full h-[600px] sm:h-[800px] flex items-center justify-center">
      {/* Center octagonal hub */}
      <div
        className="absolute flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-yellow-600  w-28 h-28 sm:w-60 sm:h-60 border-4 border-red-600" 
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
      >
        <img 
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-full"
          src="/assets/api.png" 
          alt="API logo" 
        />
      </div>

      {/* Projects around the center polygon */}
      <div className="absolute w-full h-full flex items-center justify-center rotate-animation">
        {projects.map((project, index) => {
          const angle = (index * (360 / projects.length)) * (Math.PI / 180);
          const distanceFromCenter = 250; // Adjust distance as needed
          const x = distanceFromCenter * Math.cos(angle);
          const y = distanceFromCenter * Math.sin(angle);

          return (
            <div
              key={index}
              className={`absolute w-36 h-36 sm:w-48 sm:h-48 ${project.color} shadow-md flex flex-col items-center justify-center text-center text-white border-4 border-yellow-600`}
              style={{
                transform: `translate(${x}px, ${y}px)`, // Only outer container rotates
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              {/* Image with hover overlay */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img src={project.src} alt={project.title} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full" />

                {/* Glassmorphism overlay */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-2"
                >
                  <h3 className="text-xs sm:text-sm font-semibold">{project.title}</h3>
                  <span className="text-xs sm:text-sm text-blue-200 underline mt-1">Visit</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Infographic;
