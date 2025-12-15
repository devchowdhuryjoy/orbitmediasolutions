import React, { useState, useEffect } from "react";
import logo2 from "../../../assets/logo-w.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const LastHeader = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/all-products" },
    { name: "Service", path: "/all-service" },
    { name: "Become a Partner", path: "/partners" },
    { name: "Blog", path: "/blog" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Spacer to prevent content jump */}
      {isSticky && <div className="h-[72px]" />}

      <header
        className={`w-full z-50 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 shadow-xl bg-white dark:bg-[#0d0c21]"
            : "relative bg-white dark:bg-[#0d0c21]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo2} alt="logo" className="w-24 sm:w-28 md:w-32" />
          </Link>

          {/* Desktop / Tablet Menu */}
          <nav className="hidden md:block">
            <ul className="flex ml-28 items-center gap-4 lg:gap-6 bg-white dark:bg-[#0d0c21] px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-gray-200 dark:border-gray-700">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="text-gray-600 dark:text-gray-200 hover:text-purple-500 transition"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden ml-72 text-3xl text-black dark:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white dark:bg-[#0d0c21] shadow-lg border-t border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden ${
            open ? "max-h-[80vh] py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 text-sm font-semibold">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block text-black dark:text-white hover:text-purple-500 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default LastHeader;
