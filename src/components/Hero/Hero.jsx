import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { GoDot, GoDotFill } from "react-icons/go";
import video1 from "../../../public/videos/video1.mp4";
import video2 from "../../../public/videos/video2.mp4";

const Hero = () => {
  const videos = [
    { src: video1, title: "WEB DESIGN & DEVELOPMENT" },
    { src: video2, title: "MOBILE APPLICATION DEVELOPMENT" },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen max-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        src={videos[currentVideo].src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h1
          className="
            text-white font-bold 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              px-4 py-2 rounded-xl
          "
        >
          {videos[currentVideo].title}
        </h1>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6">

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="
            w-9 h-9 sm:w-10 sm:h-10 
            flex items-center justify-center 
            bg-white/25 text-white 
            rounded-full hover:bg-white/40 
            transition active:scale-90
          "
        >
          <IoArrowBack size={22} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2 sm:gap-3">
          {videos.map((_, index) => (
            index === currentVideo ? (
              <GoDotFill
                key={index}
                className="text-white text-xl sm:text-2xl cursor-pointer"
                onClick={() => setCurrentVideo(index)}
              />
            ) : (
              <GoDot
                key={index}
                className="text-white text-xl sm:text-2xl cursor-pointer opacity-50 hover:opacity-100"
                onClick={() => setCurrentVideo(index)}
              />
            )
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="
            w-9 h-9 sm:w-10 sm:h-10 
            flex items-center justify-center 
            bg-white/25 text-white 
            rounded-full hover:bg-white/40 
            transition active:scale-90
          "
        >
          <IoArrowForward size={22} />
        </button>

      </div>
    </div>
  );
};

export default Hero;
