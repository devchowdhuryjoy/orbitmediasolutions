import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import erp1 from "../../../../assets/products/ERP.webp";
import erp2 from "../../../../assets/products/ERP2.webp";
import erp3 from "../../../../assets/products/ERP2.jpg";

const images = [erp1, erp2,erp3];

const ERPHERO = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      <img
        src={images[current]}
        alt="ERP Slider"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
      >
        <IoChevronBack size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
      >
        <IoChevronForward size={24} />
      </button>
    </div>
  );
};

export default ERPHERO;
