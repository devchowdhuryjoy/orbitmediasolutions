import React from "react";
import BlogCard from "../BlogCard/BlogCard";


const BlogList = ({ blogs, loading }) => {
  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading blogs...</p>;

  if (!blogs.length)
    return <p className="text-center mt-10 text-gray-400">No blogs found.</p>;

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.blog_title || "Untitled Blog"}
            category={blog["blog-category"] || "Web Development"}
            date={blog["blog-date"] || "Unknown Date"}
            slug={blog.slug}
            image={
              blog.banner_image
                ? `https://theorbit.one/${blog.banner_image}`
                : "https://via.placeholder.com/400x200"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
