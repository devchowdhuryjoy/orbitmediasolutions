import React, { useState } from "react";
import RainbowGradientButton from "../../../Button/RainbowGradientButton";
import blog1 from "../../../../assets/blog/blog1.png"

const BlogHeader = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="bg-white text-[#0b0b0f] py-16 px-4 md:px-10 container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Pharmacy Management
              <br /> Services UK
            </h1>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              The Key to-{" "}
              <span className="font-normal">
                Faster, Safer, and Smarter Pharmacy Operations
              </span>
            </h3>

            {/* Paragraph */}
            <p
              className={`text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl text-justify transition-all duration-300 ${
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
              className="inline-block"
            >
              <RainbowGradientButton>
                {expanded ? "Read Less" : "Read More..."}
              </RainbowGradientButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              <img
                src={blog1}
                alt="Pharmacy Software Services"
                className="w-full max-w-xl rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
