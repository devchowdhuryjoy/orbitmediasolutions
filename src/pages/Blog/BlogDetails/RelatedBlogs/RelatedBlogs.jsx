import React from "react";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Pharmacy Management Software",
    description:
      "Pharmacy Management Software UK: The Key to Faster, Safer, and Smarter Pharmacy Operations",
    image:
      "https://theorbit.one/uploads/blogs/banner_images/banner_1766316141_Pharmacy%20Blog.png",
    slug: "pharmacy-management-software",
  },
  {
    id: 2,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "React Best Practices",
    description: "Write clean and scalable React applications.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    slug: "react-best-practices",
  },
   {
    id: 3,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Pharmacy Management Software",
    description:
      "Pharmacy Management Software UK: The Key to Faster, Safer, and Smarter Pharmacy Operations",
    image:
      "https://theorbit.one/uploads/blogs/banner_images/banner_1766316141_Pharmacy%20Blog.png",
    slug: "pharmacy-management-software",
  },
  {
    id: 4,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "React Best Practices",
    description: "Write clean and scalable React applications.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    slug: "react-best-practices",
  },
];

const RelatedBlogs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Our Related Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col grow">
              {/* Category & Date */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {blog.category}
                </span>
                <span className="text-xs text-gray-400">
                  {blog.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                {blog.description}
              </p>

              {/* Read More */}
              <div className="mt-auto pt-4">
                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
