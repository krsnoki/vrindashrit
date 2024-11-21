"use client";
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTelegram, FaInstagram } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <div className="h-auto md:h-[300px] border-t-[2px] border-emerald-600 mx-6 md:mx-24 py-8 md:py-0 bg-[#15302d]">
      <div className="flex flex-col md:flex-row justify-between items-center h-full gap-8">
        
        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-dm font-bold text-white">Contact Us</h2>
          <p className="text-lg text-white mt-2">Vrindashrit Sewa Trust, Vrindavan, Mathura, Uttar Pradesh, India</p>
          <p className="text-lg text-white mt-2">+91 1234567890</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          <a href="https://t.me/Vrindashrit" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-white text-2xl hover:text-emerald-600" />
          </a>
          <a href="https://www.instagram.com/vrindashrit/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-emerald-600" />
          </a>
        </div>

        {/* Additional Footer Sections */}
        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-xl font-dm font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-emerald-600">About Us</a></li>
            <li><a href="#services" className="hover:text-emerald-600">Services</a></li>
            <li><a href="#contact" className="hover:text-emerald-600">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
