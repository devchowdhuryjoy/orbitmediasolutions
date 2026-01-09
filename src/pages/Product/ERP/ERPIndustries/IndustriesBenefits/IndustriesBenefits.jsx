import React from "react";

const IndustriesBenefits = () => {
  return (
    <div className="mt-20 grid gap-10 md:grid-cols-2">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Benefits of Orbit’s ERP Solutions
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Orbit’s ERP solutions help businesses reduce operational costs by up
          to <span className="font-semibold">40%</span> while boosting workforce
          productivity and efficiency. Our system enables full automation of
          business operations, provides real-time analytics for smarter
          decision-making, and ensures high-level security with reliable cloud
          backup support.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Fully customised to comply with UK business regulations, Orbit ERP
          seamlessly integrates with CRM, POS, HR, Accounting, and E-commerce
          platforms.
        </p>
      </div>

      {/* Why Choose */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Orbit Media Solutions
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li>• Fully customisable ERP modules for UK businesses</li>
          <li>• Affordable subscription and development costs</li>
          <li>• Fast implementation with training and onboarding</li>
          <li>• Dedicated remote and on-site support</li>
          <li>• Scalable solutions for startups to enterprises</li>
          <li>• ERP systems designed around your business needs</li>
        </ul>
      </div>
    </div>
  );
};

export default IndustriesBenefits;
