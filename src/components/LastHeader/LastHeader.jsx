import React, { useState } from 'react';
import logo2 from '../../assets/logo-w.png';
import { IoMenu, IoClose } from "react-icons/io5";

const LastHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-3">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo2} alt="logo" className="w-28" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 bg-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm">
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Home</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">About</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Products</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Service</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Become a Partner</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Blog</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Career</li>
          <li className="text-black hover:text-purple-500 cursor-pointer transition-colors duration-200">Contact</li>
        </ul>

        {/* Mobile Hamburger / Close Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {open && (
        <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg py-4 px-4 animate-slide-down">
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
}

export default LastHeader;
