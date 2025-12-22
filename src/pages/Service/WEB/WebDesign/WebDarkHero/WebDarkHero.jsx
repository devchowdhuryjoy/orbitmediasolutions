import React from 'react';
import sBack from '../../../../../assets/service/service_back.webp';

const WebDarkHero = () => {
  return (
    <div
      className="
        relative w-full 
        h-[50vh] sm:h-[50vh] md:h-[60vh] 
        bg-cover bg-center 
        flex items-center justify-center
      "
      style={{ backgroundImage: `url(${sBack})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center text-white w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 tracking-wide">
          Grow Your Business with a Powerful Web Presence
        </h1>

        {/* First Paragraph */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-100 mb-3 leading-relaxed sm:leading-relaxed md:leading-loose">
          Your website is your digital storefront. A well-designed, SEO-optimised platform attracts more visitors, generates leads, and builds credibility.
        </p>

        {/* Second Paragraph */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed sm:leading-relaxed md:leading-loose">
          Orbit Media Solutions ensures your website drives measurable growth and delivers an exceptional user experience.
        </p>
        
      </div>
    </div>
  );
};

export default WebDarkHero;
