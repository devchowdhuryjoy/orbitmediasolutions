import React from "react";
import { PlayCircle } from "lucide-react";

const BlogExperienceVideo = ({ videoUrl }) => {
  return (
    <section className="container mx-auto mt-16 bg-gray-50 py-16 px-4">
      {/* Heading + description always visible */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Experience Our Work
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          See how a premium blog can transform your presence online.
        </p>
      </div>

      {/* Video container */}
      <div className="w-full aspect-video rounded-xl overflow-hidden">
        {videoUrl ? (
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src={videoUrl}
            title="Experience Our Work"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-white border border-dashed border-gray-300">
            <PlayCircle className="mb-3 w-12 h-12 text-gray-400" />
            <p className="font-medium text-gray-600">Video content will appear here</p>
            <p className="text-sm text-gray-500">
              This section is reserved for a blog experience video.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogExperienceVideo;
