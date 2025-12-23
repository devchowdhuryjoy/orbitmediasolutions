import React, { useState } from "react";
import RainbowGradientButton from "../../../Button/RainbowGradientButton";
import blog1 from "../../../../assets/blog/blog1.png";

const BlogHeader = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white text-[#0b0b0f]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-14 md:py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5">
              Pharmacy Management
              <br className="hidden sm:block" /> Services UK
            </h1>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              The Key to{" "}
              <span className="font-normal block sm:inline">
                Faster, Safer, and Smarter Pharmacy Operations
              </span>
            </h3>

            {/* Paragraph */}
            <p
              className={`text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0 transition-all duration-300 ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              In today’s fast-paced healthcare environment, UK pharmacies face
              growing demands: high prescription volumes, strict regulatory
              compliance, and increasing expectations for patient care. Manual
              systems are no longer sufficient to keep up with modern pharmacy
              operations. This is where Pharmacy Management Software UK becomes
              essential. Orbit Media Solutions, a trusted UK provider of digital
              pharmacy solutions, offers comprehensive systems designed to help
              pharmacies streamline workflows, reduce errors, and improve
              overall patient satisfaction.
            </p>

            {/* Button */}
            <div
              onClick={() => setExpanded(!expanded)}
              className="inline-flex justify-center md:justify-start"
            >
              <RainbowGradientButton>
                {expanded ? "Read Less" : "Read More..."}
              </RainbowGradientButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <img
              src={blog1}
              alt="Pharmacy Software Services"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-md shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
