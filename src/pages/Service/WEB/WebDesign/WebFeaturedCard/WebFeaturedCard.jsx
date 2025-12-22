import React from "react";
import s1 from "../../../../../assets/service/service1.png";

const WebFeaturedCard = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-sm border border-gray-100 ">
        
        {/* Left Side – Image */}
        <div>
          <img
            src={s1}
            alt="Web Development"
            className="w-full rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Right Side – Content */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            Web Development for{" "}
            <span className="text-primary">Multi-Channel Engagement</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            A website is more than just an online presence—it’s a strategic tool
            for business growth. At{" "}
            <span className="font-medium text-gray-800">
              Orbit Media Solutions
            </span>
            , we design and develop scalable, secure, and intuitive digital
            platforms that combine superior UI/UX, lightning-fast performance,
            and robust functionality.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our solutions are fully customizable and future-proof, including
            tailor-made content management systems (CMS), threat-resistant
            architectures, and continuous maintenance and updates. We focus on
            creating platforms engineered for seamless user experiences, high
            conversion rates, and long-term scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebFeaturedCard;
