import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, category, date, slug }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            {category || "Development"}
          </span>
          <span className="text-xs text-gray-400">{date || "Unknown Date"}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mt-auto pt-4">
          <Link
            to={`/blog/${slug}`}
            className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors inline-flex items-center gap-1"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;


// banner_image": "uploads/blogs/banner_images/banner_1766316141_Pharmacy Blog.png",
// "blog-category": "Web Development"
// "blog-date" : "Dec 21, 2025"
// "blog_title": "Pharmacy Management Software UK: The Key to Faster, Safer, and Smarter Pharmacy Operations",