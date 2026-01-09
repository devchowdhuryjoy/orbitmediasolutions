import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogExperienceVideo from "./BlogExperienceVideo/BlogExperienceVideo";
import RelatedBlogs from "./RelatedBlogs/RelatedBlogs";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://theorbit.one/api/blog/${slug}`);
        const data = await res.json();

        setBlog(data?.data?.blog || null);
        setRelatedBlogs(data?.data?.related_blogs || []);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!blog) return <p className="text-center mt-20">Blog not found.</p>;

  return (
    <div>
      {/* Blog Header with banner */}
      <BlogHeader
        title={blog.blog_title}
        subtitle={blog.banner_title}
        description={blog.banner_description}
        image={
          blog.banner_image
            ? `https://theorbit.one/${blog.banner_image}`
            : null
        }
      />

      {/* Video only if exists */}
      {blog.video && blog.video.url && (
        <BlogExperienceVideo videoUrl={blog?.video?.url} />
      )}

      {/* Related blogs */}
      <RelatedBlogs relatedBlogs={relatedBlogs} />
    </div>
  );
};

export default BlogDetails;
