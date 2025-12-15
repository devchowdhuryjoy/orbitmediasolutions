import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { GoDot, GoDotFill } from "react-icons/go";
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";

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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        key={currentVideo}
        src={videos[currentVideo].src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center  px-6 py-3 rounded-lg">
          {videos[currentVideo].title}
        </h1>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4  px-4 py-2 rounded-full">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="w-9 h-9 flex items-center justify-center
          bg-white/25 text-white rounded-full
          hover:bg-white/40 transition active:scale-90"
        >
          <IoArrowBack size={20} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {videos.map((_, index) =>
            index === currentVideo ? (
              <GoDotFill
                key={index}
                onClick={() => setCurrentVideo(index)}
                className="text-white text-xl cursor-pointer"
              />
            ) : (
              <GoDot
                key={index}
                onClick={() => setCurrentVideo(index)}
                className="text-white text-xl cursor-pointer opacity-50 hover:opacity-100"
              />
            )
          )}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="w-9 h-9 flex items-center justify-center
          bg-white/25 text-white rounded-full
          hover:bg-white/40 transition active:scale-90"
        >
          <IoArrowForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
