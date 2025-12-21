import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Search } from "lucide-react";
const BlogTop = () => {
  const dropdowns = [
    {
      title: "Products",
      items: [
        "ERP",
        "HR Management Software",
        "Inventory Management Software",
        "Accountant Software",
        "Payroll",
        "POS",
        "Hotel Management Software",
        "Education Management Software",
        "Law Firm Management Software",
        "Restaurant / Takeaway Management Software",
        "Pharmacy Management",
      ],
    },
    {
      title: "Service",
      items: [
        "Web Design And Development",
        "E-Commerce (Single & Multi Vendor)",
        "Digital Marketing",
        "Mobile & Desktop Application",
        "Custom Software Solution",
        "News Portal",
        "Blog Site",
      ],
    },
    {
      title: "Sort By",
      items: ["Newest First", "Oldest First"],
    },
  ];
  return (
    <div>
      <div className="container mx-auto flex flex-wrap items-center gap-3">
        {/* Dropdowns */}
        {dropdowns.map((dropdown, index) => (
          <div key={index} className="dropdown dropdown-start">
            <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-1">
              {dropdown.title}
              <TiArrowSortedDown />
            </button>

            <ul className="dropdown-content menu bg-white border border-gray-200 rounded-xl z-10 w-64 p-2 shadow-lg">
              {dropdown.items.map((item, idx) => (
                <li key={idx}>
                  <a className="hover:bg-gray-100 rounded-lg">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Search Bar */}
        <div className="ml-auto flex items-center h-12 w-full sm:w-auto max-w-md ">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="h-full w-full px-5 rounded-l-full
            bg-gray-50 border border-gray-300
            text-gray-700 placeholder-gray-400
            outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <button
            className="h-full px-5 rounded-r-full
            bg-indigo-600 hover:bg-indigo-700
            text-white font-medium
            flex items-center gap-2 transition"
          >
            <Search size={18} />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogTop;
