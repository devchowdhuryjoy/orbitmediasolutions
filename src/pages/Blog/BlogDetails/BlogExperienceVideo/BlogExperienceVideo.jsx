import React from "react";

const BlogExperienceVideo = () => {
  return (
    <section className="container mx-auto mt-16 bg-gray-50 py-16">
      {/* Section Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Experience Our Work
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          See how a premium blog can transform your presence online.
        </p>
      </div>

      {/* Full-Width Video */}
      <div className="w-full  aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
          title="Experience Our Work"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default BlogExperienceVideo;
