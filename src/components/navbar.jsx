"use client";
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1b4541] border-b-2 border-[#1c5253] shadow-xl py-2 sticky top-0 z-50">
      <nav className="flex justify-between items-center w-[92%] mx-auto relative">
        {/* Logo */}
        <div className="font-cinzel">
          <a href='#'>
            <Image
              className='rounded-full shadow-2xl shadow-emerald-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
              src="/vrida.jpeg"
              width={60}
              height={60}
              alt="Vrindashrit"
            />
          </a>
        </div>
        
        {/* Menu Icon for Mobile */}
        <div className="md:hidden cursor-pointer text-white text-3xl z-50" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:gap-[4vw] absolute md:static bg-[#1b4541] top-0 left-0 w-full md:w-auto h-screen md:h-auto p-10 md:p-0 transition-all duration-500 ease-in-out z-40`}
        >
          <ul className="flex flex-col md:flex-row gap-8 font-sans mt-16 md:mt-0">
            <li>
              <a href='/' className="text-[#eff9f0] text-lg font-bold hover:text-gray-500" onClick={toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href={`/About`} className="text-[#eff9f0] text-lg font-bold hover:text-gray-500" onClick={toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href={`/drives`} className="text-[#eff9f0] text-lg font-bold hover:text-gray-500" onClick={toggleMenu}>
                DRIVES
              </a>
            </li>
            <li>
              <a href="#support-us" className="md:hidden text-[#eff9f0] text-lg font-bold hover:text-gray-500" onClick={toggleMenu}>
                SUPPORT US
              </a>
            </li>
          </ul>
        </div>

        {/* Donate Button */}
        <div className="hidden md:block">
          <button className="bg-[#234E4A] w-32 text-[#eff9f0] px-4 py-2 rounded-xl hover:bg-teal-500 font-bold font-sans text-lg">
            Support
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
