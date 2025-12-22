import React from "react";
import BlogCard from "../BlogCard/BlogCard";

// 🔹 Blog Data
const blogData = [
  {
    id: 1,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Pharmacy Management Software ",
    description:
      "Pharmacy Management Software UK: The Key to Faster, Safer, and Smarter Pharmacy Operations",
    image:
      "https://theorbit.one/uploads/blogs/banner_images/banner_1766316141_Pharmacy%20Blog.png",
  },
  {
    id: 2,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "React Best Practices",
    description: "Write clean and scalable React applications.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Tailwind CSS Tips",
    description: "Speed up your workflow with Tailwind CSS.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "JavaScript Performance",
    description: "Optimize JS code for better performance.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Frontend Architecture",
    description: "Build scalable frontend architectures.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "UI Component Design",
    description: "Design reusable UI components.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Accessibility Matters",
    description: "Make your website accessible to everyone.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Web Animations",
    description: "Add smooth animations to your UI.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
  },
];

// 🔹 Slug Generator
const createSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// 🔹 Blog List Component
const BlogList = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((blog) => {
          const slug = createSlug(blog.title); // ✅ slug from title

          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              category={blog.category}
              date={blog.date}
              image={blog.image}
              description={blog.description}
              slug={slug} // ✅ pass slug
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
