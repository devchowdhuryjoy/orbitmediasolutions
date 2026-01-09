import React, { useState } from "react";
import RainbowGradientButton from "../../../../Button/RainbowGradientButton";
import BASE_URL from "../../../../../ApiBaseUrl/ApiBaseUrl";

const DesignSolution = ({ serviceData }) => {
  const [expanded, setExpanded] = useState(false);

  if (!serviceData) return null;

  const item = serviceData.itemservices?.[0] || {};

  const title =
    item.banner_title || serviceData.service_name || "ERP Software Services";
  const subtitle = item.banner_subtitle || "";
  const description = item.banner_description || "";

  const imagePath = item.service_image || serviceData.banner_image || null;
  const imageUrl = imagePath
    ? `${BASE_URL.replace(/\/$/, "")}/${imagePath}`.replace(/ /g, "%20")
    : null;

  return (
    <section className="bg-white text-[#0b0b0f] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              {title}
            </h1>

            {subtitle && (
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                {subtitle}
              </h3>
            )}

            {description && (
              <p
                className={`text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 max-w-2xl text-justify transition-all duration-300 ${
                  expanded ? "" : "line-clamp-3"
                }`}
              >
                {description}
              </p>
            )}

            {description && (
              <div
                onClick={() => setExpanded(!expanded)}
                className="inline-block cursor-pointer"
              >
                <RainbowGradientButton>
                  {expanded ? "Read Less" : "Read More..."}
                </RainbowGradientButton>
              </div>
            )}
          </div>

          {/* Right Image */}
          {imageUrl && (
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <img
                src={imageUrl}
                alt={title}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-sm shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignSolution;
