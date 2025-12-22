import React, { useState } from "react";
import RainbowGradientButton from "../../../Button/RainbowGradientButton";
import e1 from "../../../../assets/products/e1.png";

const ERPSERVICE = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white text-[#0b0b0f] py-16 px-4 md:px-10 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            ERP Software <br /> Services UK
          </h1>

          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            By Orbit Media Solutions —{" "}
            <span className="font-normal">
              Smart, Scalable & Custom ERP Solutions for UK Businesses
            </span>
          </h3>

          {/* Paragraph */}
          <p
            className={`text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl text-justify transition-all duration-300 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            Orbit Media Solutions provides modern ERP (Enterprise Resource Planning)
            Software Services to help UK businesses streamline operations, automate
            processes, reduce cost, and gain real-time control over Finance, HR,
            Inventory, CRM, Supply Chain, and Manufacturing — all in one platform.
            We deliver fully customisable, scalable and secure ERP solutions tailored
            for SMEs and enterprises across the UK.
          </p>

          {/* Button */}
          <div onClick={() => setExpanded(!expanded)} className="inline-block">
            <RainbowGradientButton>
              {expanded ? "Read Less" : "Read More..."}
            </RainbowGradientButton>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            <img
              src={e1}
              alt="ERP Software Services"
              className="w-full max-w-xl rounded-sm shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ERPSERVICE;
