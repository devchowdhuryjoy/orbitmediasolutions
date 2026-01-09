import React, { useState } from "react";
import RainbowGradientButton from "../../../Button/RainbowGradientButton";
import BASE_URL from "../../../../ApiBaseUrl/ApiBaseUrl";

const ERPSERVICE = ({ productData }) => {
  const [expanded, setExpanded] = useState(false);

  if (!productData) return null;

  // Get first item or fallback to empty object
  const item = productData.item_product?.[0] || {};

  // Titles and description
  const title = item.banner_title || productData.product_name || "ERP Software Services";
  const subtitle = item.banner_subtitle || "";
  const description = item.banner_description || "";

  // Construct image URL properly with BASE_URL
  const imagePath = item.product_image || productData.banner_image || null;
  const imageUrl = imagePath
    ? `${BASE_URL.replace(/\/$/, "")}/${imagePath}`.replace(/ /g, "%20")
    : null;

  return (
    <div className="bg-white text-[#0b0b0f] py-16 px-4 md:px-10 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">{title}</h1>
          {subtitle && <h3 className="text-xl md:text-2xl font-semibold mb-4">{subtitle}</h3>}
          {description && (
            <p
              className={`text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl text-justify transition-all duration-300 ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {description}
            </p>
          )}
          {description && (
            <div onClick={() => setExpanded(!expanded)} className="inline-block cursor-pointer">
              <RainbowGradientButton>
                {expanded ? "Read Less" : "Read More..."}
              </RainbowGradientButton>
            </div>
          )}
        </div>

        {/* Right Image */}
        {imageUrl && (
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={imageUrl}
              alt={title}
              className="w-full max-w-xl rounded-sm shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ERPSERVICE;
