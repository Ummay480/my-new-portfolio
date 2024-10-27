"use client";
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  colorClass: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ href, icon, label, colorClass }) => {
  return (
    <a
      href={href}
      className={`group flex items-center justify-center ml-8 w-[40px] h-[40px] rounded-full bg-white no-underline shadow-[5px_10px_20px_rgba(150,150,150,0.3)] overflow-hidden relative transition-all duration-300 ease-in-out hover:w-[130px] hover:h-[40px] hover:mt-[5px] hover:justify-start hover:rounded-[50px] hover:pl-[15px] cursor-pointer ${colorClass}`}
    >
      {icon}
      <span className="hidden ml-[10px] whitespace-nowrap text-[14px] group-hover:inline">
        {label}
      </span>
    </a>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div>
           
      {/* Contact Buttons */}
      <div className="flex gap-[10px] my-[20px]">
        <ContactButton
          href="#"
          icon={<FaWhatsapp className="text-[30px] font-semibold text-[#25D366]" />}
          label="WhatsApp"
          colorClass="whatsapp"
        />

        <ContactButton
          href="#"
          icon={<FaLinkedin className="text-[30px] font-semibold text-[#0077B5]" />}
          label="LinkedIn"
          colorClass="linkedin"
          
        />
        
        <ContactButton
          href="#"
          icon={<FaEnvelope className="text-[30px] font-semibold text-[#EA4335]" />}
          label="Email"
          colorClass="email"
        />

        <ContactButton
          href="#"
          icon={<FaGithub className="text-[30px] font-semibold text-[#333]" />}
          label="GitHub"
          colorClass="github"
          
        />
        
      </div>
    </div>
  );
};

export default ContactSection;
