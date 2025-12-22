import React, { useState } from "react";
import s1 from "../../../../../assets/service/service1.png";
import RainbowGradientButton from "../../../../Button/RainbowGradientButton";

const DesignSolution = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white text-[#0b0b0f] py-12 px-4 sm:px-6 md:px-10 lg:px-16 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-4 sm:mb-6">
            Web Design And <br /> Development Solutions
          </h1>

          <p
            className={`text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0 text-justify transition-all duration-300 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            At Orbit Media Solutions, we specialize in designing and developing
            bespoke, high-performance websites and web applications that not
            only engage users but also deliver seamless experiences across all
            devices. Our team combines modern design principles with scalable,
            robust technology to ensure every project meets the unique needs of
            our clients. Focusing on the UK market, our web development services
            are tailored to help businesses strengthen their online presence,
            improve user engagement, and drive measurable results. From
            responsive website design and intuitive user interfaces to complex
            web applications and e-commerce solutions, we prioritize a
            user-first approach that balances functionality, aesthetics, and
            performance. By partnering with Orbit Media Solutions, businesses
            gain a strategic digital partner capable of translating their vision
            into innovative, reliable, and future-proof digital solutions that
            scale as they grow.
          </p>

          {/* Button */}
          <div
            onClick={() => setExpanded(!expanded)}
            className="inline-block cursor-pointer"
          >
            <RainbowGradientButton>
              {expanded ? "Read Less" : "Read More..."}
            </RainbowGradientButton>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative group w-full max-w-md sm:max-w-lg md:max-w-xl">
            <img
              src={s1}
              alt="ERP Software Services"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSolution;
