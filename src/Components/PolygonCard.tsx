"use client"; // Mark this file as a Client Component

import React from 'react';
import Image from 'next/image';

interface PolygonCardData {
  id: number;
  label: string;
  imageSrc: string;
}

const polygonData: PolygonCardData[] = [
  { id: 1, label: 'Simple Calculator', imageSrc: "/assets/calculator.png" },
  { id: 2, label: 'ATM', imageSrc: '/assets/Atm.png' },
  { id: 3, label: 'CLI Number Guessing Game', imageSrc: '/assets/number-guessing-game.jpg' },
  { id: 4, label: 'Currency Converter', imageSrc: '/assets/currency_converter.png' },
  { id: 5, label: 'To-Do List', imageSrc: '/assets/to-do-list.png' },
  { id: 6, label: 'Student Management System', imageSrc: '/assets/student-management.png' },
];

const gradientPolygonColors = [
  'linear-gradient(45deg, red, yellow)',
  'linear-gradient(45deg, yellow, red)',
  'linear-gradient(45deg, red, orange)',
  'linear-gradient(45deg, yellow, orange)',
  'linear-gradient(45deg, red, gold)',
  'linear-gradient(45deg, yellow, gold)',
];

const CustomPolygonCard: React.FC = () => {
  const polygonCount = polygonData.length;
  const radius = 260;

  return (
    <div className="relative w-full h-[600px] flex justify-center items-center bg-[#121212] my-32">
      {polygonData.map((polygon, index) => {
        const angle = (index / polygonCount) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={polygon.id}
            className="absolute"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <div
              className="absolute ml-28 top-1"
              style={{
                width: '210px',
                height: '150px',
                clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
                background: gradientPolygonColors[index % gradientPolygonColors.length],
                zIndex: 10,
                transform: `translate(-50%, -50%)`,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
              }}
            />

            <div
              className="relative w-56 h-52 border border-red-600 rounded-lg flex flex-col justify-center items-center text-center bg-black"
              style={{
                clipPath: `polygon(0% 1%, 100% 3%, 100% 75%, 50% 100%, 0% 75%)`,
                padding: '10px',
                boxShadow: `
                  0 0 10px rgba(255, 0, 0, 0.8),  /* Red glow for the reflection */
                  0 0 20px rgba(255, 255, 0, 0.6), /* Yellow glow reflection */
                  0 0 30px rgba(255, 255, 255, 0.3)`, /* White glow reflection */
                zIndex: 10,
                borderRadius: '30px',
              }}
            >
              <div
                className="absolute top-[-20px] left-1/2 transform -translate-x-1/2"
                style={{
                  width: '80px',
                  height: '70px',
                  borderRadius: '50%',
                  background: gradientPolygonColors[index % gradientPolygonColors.length],
                  zIndex: 20,
                }}
              />

              <div className="absolute flex justify-center items-center">
                <Image
                  src={polygon.imageSrc}
                  alt={polygon.label}
                  width={100}
                  height={80}
                  className="object-contain rounded-full"
                />
              </div>

              {/* Label for each card */}
              <div className="mt-32 text-white font-semibold text-sm w-20 text-center">
                {polygon.label}
              </div>
            </div>
          </div>
        );
      })}

      <div
        className="absolute flex justify-center items-center text-center"
        style={{
          width: '200px',
          height: '200px',
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
          boxShadow: 'inset 0 4px 15px rgba(255, 255, 255, 0.7), 0 12px 20px rgba(255, 255, 255, 0.9)',
          zIndex: 20,
          backgroundColor: 'black',
          border: '3px solid red',
        }}
      >
        <Image
          src="/assets/api.png"
          alt="api"
          width={220}
          height={150}
        />
      </div>
    </div>
  );
};

export default CustomPolygonCard;
