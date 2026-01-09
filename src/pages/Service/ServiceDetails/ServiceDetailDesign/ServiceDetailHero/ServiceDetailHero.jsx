import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import BASE_URL from "../../../../../ApiBaseUrl/ApiBaseUrl";

const ServiceDetailHero = ({ sliders }) => {
  const images = sliders?.map((s) => s.image) || [];
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds only if more than 1 image
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  if (!images.length) {
    return (
      <div className="relative w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-gray-200">
        <p className="text-gray-700 text-lg">No hero image available</p>

        {/* Always show arrows even if no images */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-50"
        >
          <IoChevronBack size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-50"
        >
          <IoChevronForward size={28} />
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={encodeURI(`${BASE_URL}/${img.trim()}`)}
          alt={`Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Always show arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-50"
      >
        <IoChevronBack size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-50"
      >
        <IoChevronForward size={28} />
      </button>
    </div>
  );
};

export default ServiceDetailHero;
