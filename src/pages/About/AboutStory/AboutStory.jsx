import React, { useState, useEffect } from "react";

const AboutStory = () => {
  const apiUrl = "https://theorbit.one/api/about";

  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();

        if (!result.success || !result.data?.about) throw new Error("Invalid API structure");

        setStoryData(result.data.about);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  if (loading) return <p className="text-center py-12">Loading...</p>;
  if (error) return <p className="text-center py-12 text-red-500">Error: {error}</p>;
  if (!storyData) return null;

  // ---- Only take the story/introduction part ----
  const fullText = storyData.story_description;
  const servicesIndex = fullText.indexOf("Our Services");
  const storyText =
    servicesIndex !== -1 ? fullText.slice(0, servicesIndex).trim() : fullText;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* === Text Column === */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {storyData.story_title}
          </h1>

          <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
            {storyText}
          </div>
        </div>

        {/* === Image Column === */}
        <div className="mt-8 lg:mt-48">
          <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-5 lg:aspect-h-4 overflow-hidden rounded-lg shadow-xl">
            <img
              className="object-cover w-full h-full"
              src={`https://theorbit.one/${storyData.banner_image}`}
              alt={storyData.story_title}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutStory;
