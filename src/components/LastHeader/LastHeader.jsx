import React, { useState, useEffect } from 'react';
import logo2 from '../../assets/logo-w.png';
import { IoMenu, IoClose } from "react-icons/io5";

const LastHeader = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky effect after scrolling 80px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`bg-white z-50 w-full transition-all duration-300 
      ${isSticky ? "fixed top-0 shadow-xl" : "relative"}
    `}>
      <div className="container mx-auto flex items-center  px-4 md:px-8 py-3">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo2} alt="logo" className="w-28" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 bg-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl border border-gray-200 ml-28">
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Home</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">About</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Products</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Service</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Become a Partner</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Blog</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Career</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Contact</li>
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white mt-2 rounded-lg shadow-xl py-4 px-4 animate-slide-down border border-gray-200">
          <ul className="flex flex-col gap-3 text-center font-medium text-base">
            <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Home</li>
            <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">About</li>
            <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Products</li>
            <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Service</li>
            <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Become a Partner</li>
            <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Blog</li>
            <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Career</li>
            <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LastHeader;
