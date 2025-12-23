import React from "react";
import BlogTop from "./BlogTop/BlogTop";
import BlogList from "./BlogList/BlogList";
import Pagination from "./Pagination/Pagination";
// import BlogCard from "./BlogCard/BlogCard";


const Blog = () => {
  

  return (
    <>
        <BlogTop/>
        <BlogList/>
        <Pagination/>
    </>
  );
};

export default Blog;
