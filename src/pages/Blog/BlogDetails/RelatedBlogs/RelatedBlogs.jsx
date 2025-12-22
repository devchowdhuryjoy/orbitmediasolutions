import React from "react";
// import BlogCard from "../BlogCard/BlogCard";
import { blogData, createSlug } from "../../BlogList/BlogList";
import BlogCard from "../../BlogCard/BlogCard";

const RelatedBlogs = ({ currentSlug }) => {
  // Filter out current blog so it doesn't show in related
  const relatedBlogs = blogData
    .filter((b) => createSlug(b.title) !== currentSlug)
    .slice(0, 4); // show only 4 related blogs

  return (
    <section className="w-full mt-16 bg-white py-16">
      {/* Section Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Our Related Blog
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Explore hand-crafted blog layouts designed to inspire.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {relatedBlogs.map((blog) => {
          const slug = createSlug(blog.title);
          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              category={blog.category}
              date={blog.date}
              image={blog.image}
              description={blog.description}
              slug={slug}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedBlogs;
