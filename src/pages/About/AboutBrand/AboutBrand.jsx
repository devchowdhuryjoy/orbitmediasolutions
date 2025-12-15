import React from "react";

import brand1 from "../../../assets/images/brands/mapbox.png";
import brand2 from "../../../assets/images/brands/slack.png";
import brand3 from "../../../assets/images/brands/spotify.png";
import brand4 from "../../../assets/images/brands/stenciljs.png";
import brand5 from "../../../assets/images/brands/strapi.png";
import brand6 from "../../../assets/images/brands/woocommerce.png";

const AboutBrand = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <div className="py-8 bg-white">
      <h3 className="text-center text-indigo-700 uppercase text-xl sm:text-2xl md:text-3xl mb-6 tracking-wider">
        Our Brands
      </h3>

      {/* image section */}
      <div className="flex items-center justify-center gap-6 flex-wrap bg-gray-400">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`brand-${index}`}
            className="h-10 sm:h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutBrand;
