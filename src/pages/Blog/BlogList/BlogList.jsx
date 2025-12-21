import React from "react";
import BlogCard from "../BlogCard/BlogCard";

const blogData = [
  {
    id: 1,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Modern Web Design",
    description: "Learn the fundamentals of modern UI/UX design.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "React Best Practices",
    description: "Write clean and scalable React applications.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Tailwind CSS Tips",
    description: "Speed up your workflow with Tailwind CSS.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "JavaScript Performance",
    description: "Optimize JS code for better performance.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Frontend Architecture",
    description: "Build scalable frontend architectures.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "UI Component Design",
    description: "Design reusable UI components.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Accessibility Matters",
    description: "Make your website accessible to everyone.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Web Animations",
    description: "Add smooth animations to your UI.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const BlogList = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            category={blog.category}
            date={blog.date}
            image={blog.image}
            // title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
