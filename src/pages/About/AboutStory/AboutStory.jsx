import React from "react";
import orbit from "../../../assets/images/Orbit.webp";

const AboutStory = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Grid layout for the two main columns (text and image) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* === Text Content Column === */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          
          <div className="text-base text-gray-700 text-justify leading-relaxed space-y-4">
            {/* Paragraph 1 - Product List and Conclusion */}
            <p>
              Orbit Media Solutions Founded in 2018, Orbit Media Solutions has been at the forefront of digital innovation — transforming bold ideas into powerful, results-driven solutions. What began as a small, passionate team of developers has grown into a full-service digital agency with a global presence, operating from London and Dhaka. From the very beginning, our mission has been simple: empower businesses with technology that not only solves problems but creates new opportunities. Today, we bring together creativity, technology, and strategy to help startups, SMEs, and enterprises thrive in an ever-evolving digital world. Our Services We offer a complete range of digital services designed to fuel your growth: Web Design & Development – Stunning, responsive, and user-focused websites. E-commerce Solutions – Single and multi-vendor platforms built for online success. Mobile & Desktop Applications – Seamless, high-performance apps for every platform. Custom Software Solutions – Tailored systems for unique business needs. Digital Marketing – Strategies that boost visibility, engagement, and conversions. Specialized Platforms – News portals, blog sites, and niche management systems. Our Products We also provide powerful, ready-to-use software products to streamline your operations: ERP Systems HR Management Software Inventory Management Software Accountant & Payroll Solutions POS Systems Hotel Management Software Education Management Software Law Firm Management Software Restaurant & Takeaway Management Software Pharmacy Management Software Warehouse Management Software Hosting Platforms CRM Solutions At Orbit Media Solutions, we don’t just deliver projects — we deliver results that matter. Whether you’re a startup with a vision or an established enterprise aiming to scale, our team is ready to guide you through every step of your digital journey.
            </p>
            
          </div>
        </div>
        
        {/* === Image Column === */}
        <div className="mt-8 lg:mt-48">
          {/* Aspect ratio container for the image */}
          <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-5 lg:aspect-h-4 overflow-hidden rounded-lg shadow-xl">
            {/* Using a placeholder image that mimics the look of the original */}
            <img
              className="object-cover w-full h-full"
              src={orbit} // Placeholder URL to match the provided image's aesthetics
              alt="Orbit Media Solutions Office Building Signage"
            />
          </div>
        </div>
        
      </div>
      
    </div>
  );

};

export default AboutStory;
