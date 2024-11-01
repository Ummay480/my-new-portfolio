"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // Level between 0 and 100
  color: string; // Tailwind CSS color classes
}

const skills: Skill[] = [
  { name: 'Time Management', level: 85, color: 'bg-green-500' },
  { name: 'Teamwork', level: 90, color: 'bg-blue-500' },
  { name: 'Communication Skills', level: 80, color: 'bg-purple-500' },
  { name: 'Problem Solving', level: 75, color: 'bg-teal-500' },
];

const ProfessionalSkills: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="relative w-24 h-24 sm:w-32 sm:h-32"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className={`absolute inset-0 rounded-full border-4 border-gray-200 flex items-center justify-center`}>
            <motion.div
              className={`rounded-full ${skill.color} absolute`}
              style={{ height: '100%', width: `${skill.level}%`, borderRadius: '50%' }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
            />
            <div className="text-center text-white font-semibold">
              <div className="text-xs">{skill.name}</div>
              <div className="text-sm">{skill.level}%</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfessionalSkills;
