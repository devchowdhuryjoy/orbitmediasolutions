import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import logo2 from "../../../assets/logo-w.png";

/* ---------- Portal Dropdown (Desktop / Tablet) ---------- */
const PortalDropdown = ({ open, position, children }) => {
  if (!open) return null;

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: position.width,
        zIndex: 999999,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

const LastHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({
    top: 0,
    left: 0,
    width: 288,
  });
  // service
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [serviceDropdownPos, setServiceDropdownPos] = useState({
    top: 0,
    left: 0,
    width: 288,
  });

  const serviceTriggerRef = useRef(null);
  // service

  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  /* ---------- Sticky + Position Update ---------- */
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);

      // Products dropdown position
      if (dropdownOpen && triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setDropdownPos({
          top: rect.bottom + window.scrollY,
          left: rect.left,
          width: 288,
        });
      }

      // Service dropdown position
      if (serviceDropdownOpen && serviceTriggerRef.current) {
        const rect = serviceTriggerRef.current.getBoundingClientRect();
        setServiceDropdownPos({
          top: rect.bottom + window.scrollY,
          left: rect.left,
          width: 288,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [dropdownOpen, serviceDropdownOpen]);

  /* ---------- Sticky + Position Update ---------- */

  /* ---------- Products Dropdown Data ---------- */
  const productsDropdown = [
    { name: "ERP", slug: "erp-software" },
    { name: "HR Management Software", slug: "hr-management" },
    { name: "Inventory Management Software", slug: "inventory-management" },
    { name: "Accountant Software", slug: "accountant-software" },
    { name: "Payroll", slug: "payroll" },
    { name: "POS", slug: "pos-software" },
    { name: "Hotel Management Software", slug: "hotel-management" },
    { name: "Education Management Software", slug: "education-management" },
    { name: "Law Firm Management Software", slug: "law-firm-management" },
    {
      name: "Restaurant / Takeaway Management Software",
      slug: "restaurant-management",
    },
    { name: "Pharmacy Management", slug: "pharmacy-management" },
  ];
  /* ---------- Service Dropdown Data ---------- */
  const servicesDropdown = [
    { name: "Web Design And Development", slug: "web-design-development" },
    {
      name: "E-Commerce (Single & Multi Vendor)",
      slug: "e-commerce-single-multi-vendor",
    },
    { name: "Digital Marketing", slug: "digital-marketing" },
    {
      name: "Mobile & Desktop Application",
      slug: "mobile-desktop-application",
    },
    { name: "Customed Software Solution", slug: "customed-software-solution" },
    { name: "News Portal", slug: "news-portal" },
    { name: "Blog Site", slug: "blog-site" },
  ];

  return (
    <>
      {isSticky && <div style={{ height: headerHeight }} />}

      {/* ---------- Header ---------- */}
      <header
        ref={headerRef}
        className={`w-full z-9999 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 shadow-xl bg-white dark:bg-[#0d0c21]"
            : "relative bg-white dark:bg-[#0d0c21]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link to="/">
            <img src={logo2} alt="logo" className="w-24 sm:w-28 md:w-32" />
          </Link>

          {/* ---------- Desktop / Tablet Menu ---------- */}
          <nav className="hidden md:flex grow justify-center">
            <ul className="flex items-center gap-6 text-sm font-semibold">
              <LinkItem to="/" label="Home" />
              <LinkItem to="/about" label="About" />

              {/* Products (Hover Dropdown) */}
              <li
                ref={triggerRef}
                className="py-2 cursor-pointer flex items-center gap-1 text-gray-600 dark:text-gray-200 hover:text-purple-500"
                onMouseEnter={() => {
                  const rect = triggerRef.current.getBoundingClientRect();
                  setDropdownPos({
                    top: rect.bottom + window.scrollY,
                    left: rect.left,
                    width: 288,
                  });
                  setDropdownOpen(true);
                }}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link to="/all-products" className="flex items-center gap-1">
                  Products <IoChevronDown size={14} />
                </Link>
              </li>
              {/* Services (Hover Dropdown) */}
              {/* <LinkItem to="/all-service" label="Service" /> */}
              <li
                ref={serviceTriggerRef}
                className="py-2 cursor-pointer flex items-center gap-1 text-gray-600 dark:text-gray-200 hover:text-purple-500"
                onMouseEnter={() => {
                  const rect =
                    serviceTriggerRef.current.getBoundingClientRect();
                  setServiceDropdownPos({
                    top: rect.bottom + window.scrollY,
                    left: rect.left,
                    width: 288,
                  });
                  setServiceDropdownOpen(true);
                }}
                onMouseLeave={() => setServiceDropdownOpen(false)}
              >
                <Link to="/all-service" className="flex items-center gap-1">
                  Service <IoChevronDown size={14} />
                </Link>
              </li>

              <LinkItem to="/partners" label="Become a Partner" />
              <LinkItem to="/blog" label="Blog" />
              <LinkItem to="/career" label="Career" />
              <LinkItem to="/contact" label="Contact" />
            </ul>
          </nav>

          {/* ---------- Mobile Toggle ---------- */}
          <button
            className="md:hidden text-3xl text-black dark:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </header>

      {/* ---------- Desktop Dropdown (Portal) ---------- */}
      <PortalDropdown open={dropdownOpen} position={dropdownPos}>
        <ul
          className="bg-white dark:bg-[#0d0c21] shadow-2xl rounded-lg py-4 border border-gray-100 dark:border-gray-800"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {productsDropdown.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/product/${item.slug}`}
                className="block px-6 py-2 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </PortalDropdown>
      <PortalDropdown open={serviceDropdownOpen} position={serviceDropdownPos}>
        <ul
          className="bg-white dark:bg-[#0d0c21] shadow-2xl rounded-lg py-4 border border-gray-100 dark:border-gray-800"
          onMouseEnter={() => setServiceDropdownOpen(true)}
          onMouseLeave={() => setServiceDropdownOpen(false)}
        >
          {servicesDropdown.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/service/${item.slug}`}
                className="block px-6 py-2 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </PortalDropdown>

      {/* ---------- Mobile Menu ---------- */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-white dark:bg-[#0d0c21] z-99999 shadow-xl">
          <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800 text-sm font-semibold">
            <MobileLink
              to="/"
              label="Home"
              close={() => setMobileOpen(false)}
            />
            <MobileLink
              to="/about"
              label="About"
              close={() => setMobileOpen(false)}
            />

            {/* Mobile Products Accordion */}
            <li>
              <button
                className="w-full flex justify-between items-center px-6 py-4"
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
              >
                Products <IoChevronDown />
              </button>

              {mobileProductOpen && (
                <ul className="bg-gray-50 dark:bg-[#14132f]">
                  {productsDropdown.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block px-10 py-3 text-sm text-gray-600 dark:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* <MobileLink
              to="/all-service"
              label="Service"
              close={() => setMobileOpen(false)}
            /> */}
            <li>
  <button
    className="w-full flex justify-between items-center px-6 py-4"
    onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
  >
    Service <IoChevronDown />
  </button>

  {mobileServiceOpen && (
    <ul className="bg-gray-50 dark:bg-[#14132f]">
      {servicesDropdown.map((item) => (
        <li key={item.slug}>
          <Link
            to={`/service/${item.slug}`}
            onClick={() => setMobileOpen(false)}
            className="block px-10 py-3 text-sm text-gray-600 dark:text-gray-300"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )}
</li>

            <MobileLink
              to="/partners"
              label="Become a Partner"
              close={() => setMobileOpen(false)}
            />
            <MobileLink
              to="/blog"
              label="Blog"
              close={() => setMobileOpen(false)}
            />
            <MobileLink
              to="/career"
              label="Career"
              close={() => setMobileOpen(false)}
            />
            <MobileLink
              to="/contact"
              label="Contact"
              close={() => setMobileOpen(false)}
            />
          </ul>
        </div>
      )}
    </>
  );
};

/* ---------- Helpers ---------- */
const LinkItem = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="text-gray-600 dark:text-gray-200 hover:text-purple-500"
    >
      {label}
    </Link>
  </li>
);

const MobileLink = ({ to, label, close }) => (
  <li>
    <Link to={to} onClick={close} className="block px-6 py-4">
      {label}
    </Link>
  </li>
);

export default LastHeader;
