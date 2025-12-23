import React from 'react'
import BlogHeader from './BlogHeader/BlogHeader'
import BlogExperienceVideo from './BlogExperienceVideo/BlogExperienceVideo'
import RelatedBlogs from './RelatedBlogs/RelatedBlogs'


const BlogDetails = () => {
  return (
    <div>
        <BlogHeader/>
        <BlogExperienceVideo/>
        <RelatedBlogs/>
    </div>
  )
}

export default BlogDetails