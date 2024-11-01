// pages/index.tsx
import React from "react";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import AboutMe from "../Components/AboutSection";
import ProjectSection from "../Components/ProjectSection";
import Skills from '../Components/Skills';
import ContactUs from '../Components/ContactForm';
import Contacts from "../Components/Contacts";
import Infographic from "../Components/Infographic";



const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto">
      <div>
        {/* Navbar */}
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
      
      {/* About Me Section */}
      <div className="flex items-center justify-center bg-[#121212]">
        <AboutMe />
      </div>

      {/* Project Section */}
      <div className="min-h-screen bg-[#121212] flex flex-col items-center py-12">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">My Projects</h1>
        
        <ProjectSection />
   
      </div>

      {/* Infographic Section */}
      <Infographic />
      
      {/* Skill Section */}
      <Skills />
   
      {/* Contact Us Section */}
      <ContactUs />

      {/* Additional Contacts Section */}
      <Contacts />
    </main>
  );
};

export default HomePage;
