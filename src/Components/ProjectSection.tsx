import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Portfolio",
    imageSrc: '/assets/portfolio-1.jpg',
    logoSrc: '/assets/nextjs-logo.svg',
    link: '#',
  },
  {
    title: 'Real Estate',
    imageSrc: '/assets/project1.jpeg',
    logoSrc: '/assets/figma-logo.svg',
    link: '#',
  },
  {
    title: 'E-Commerce',
    imageSrc: '/assets/project.jpeg',
    logoSrc: '/assets/shopify-logo.svg',
    link: '#',
  },
  {
    title: 'Marketing Agency',
    imageSrc: '/assets/project2.jpeg',
    logoSrc: '/assets/wordpress.svg',
    link: '#',
  },
  {
    title: 'Resume Builder',
    imageSrc: '/assets/project4.jpeg',
    logoSrc: '/assets/ts-logo.svg',
    link: '#',
  },
  {
    title: "Calculator",
    imageSrc: '/assets/Calculator1.jpeg',
    logoSrc: '/assets/ts-logo.svg',
    link: '#',
  },
  {
    title: "Clone",
    imageSrc: '/assets/project5.jpeg',
    logoSrc: '/assets/html-logo.svg',
    link: '#',
  },
  {
    title: 'Clone',
    imageSrc: '/assets/project6.jpeg',
    logoSrc: '/assets/html-logo.svg',
    link: '#',
  },
  {
    title: 'Resume',
    imageSrc: '/assets/project7.jpeg',
    logoSrc: '/assets/html-logo.svg',
    link: '#',
  },
];

const ProjectSection = () => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 reflected-border">
      <div className="bg-black py-0 px-0"> {/* Reduced padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"> {/* Smaller gaps */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageSrc={project.imageSrc}
              logoSrc={project.logoSrc} 
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
