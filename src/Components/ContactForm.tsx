"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // Add form submission logic here
  };

  return (
    <div className="flex flex-col items-center mt-20 px-4">
      <h2 className="text-4xl mb-6 font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg md:max-w-2xl"> {/* Responsive max-width */}
        {/* Name Input */}
        <div className="flex items-center mb-4">
          <Image
            src="/assets/person.png"
            alt="name icon"
            width={80}
            height={40}
            className="mr-3"
          />
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow md:text-base lg:text-lg md:px-6 md:py-4" // Responsive size for larger screens
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center mb-4">
          <Image
            src="/assets/gmail.png"
            alt="gmail-icon"
            width={80}
            height={60}
            className="mr-3"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow md:text-base lg:text-lg md:px-6 md:py-4" // Responsive size for larger screens
          />
        </div>

        {/* Phone Input */}
        <div className="flex items-center mb-4">
          <Image
            src="/assets/call1.png"
            alt="phone icon"
            width={80}
            height={40}
            className="mr-3"
          />
          <input
            type="tel" // Changed to "tel" for phone input
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow md:text-base lg:text-lg md:px-6 md:py-4" // Responsive size for larger screens
          />
        </div>

        {/* Message Input */}
        <div className="flex items-start mb-4">
          <Image
            src="/assets/message.png"
            alt="message icon"
            width={100}
            height={60}
            className="mr-3 mt-1"
          />
          <textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow md:text-base lg:text-lg md:px-6 md:py-4" // Responsive size for larger screens
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-br from-red-600 to-yellow-600 hover:bg-red-700 text-white text-lg mt-4 transition duration-300 ease-in-out"
        >
          Send a message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
