import React, { useState } from 'react';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import video1 from '../../../public/videos/video1.mp4';
import video2 from '../../../public/videos/video2.mp4';

const Hero = () => {
  const videos = [
    { src: video1, title: "WEB DESIGN & DEVELOPMENT" },
    { src: video2, title: "MOBILE APPLICATION DEVELOPMENT" }
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        src={videos[currentVideo].src}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>

      {/* Dynamic Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          {videos[currentVideo].title}
        </h1>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition"
      >
        <IoArrowBack />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition"
      >
        <IoArrowForward />
      </button>

    </div>
  );
};

export default Hero;
