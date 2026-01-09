import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogs = ({ relatedBlogs }) => {
  if (!relatedBlogs || relatedBlogs.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Our Related Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full"
          >
            {/* Image */}
            {blog.banner_image && (
              <Link to={`/blog/${blog.slug}`}>
                <img
                  src={`https://theorbit.one/${blog.banner_image}`}
                  alt={blog.blog_title}
                  className="w-full h-48 object-cover"
                />
              </Link>
            )}

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <Link to={`/blog/${blog.slug}`}>
                <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition">
                  {blog.blog_title}
                </h3>
              </Link>

              {/* Spacer pushes Read More to bottom */}
              <div className="mt-auto pt-4">
                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-blue-600 font-bold text-sm hover:text-blue-800 inline-flex items-center gap-1"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedBlogs;
