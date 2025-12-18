import React from "react";
import erpukbusiness from "../../../../assets/products/e2.png";

const ERPUKBUSINESS = () => {
  const benefits = [
    "Centralise business operations",
    "Minimise manual tasks",
    "Automate key processes",
    "Improve productivity & efficiency",
    "Ensure UK compliance & accounting standards",
    "Make accurate real-time decisions based on data",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 container mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why Do UK Businesses Need ERP Software?
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Today, UK companies are rapidly shifting towards automation and
            data-driven decision-making. ERP is now an essential part of achieving
            operational excellence.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            ERP Helps UK Businesses to:
          </h3>

          <ul className="space-y-4">
            {benefits.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-bold">
                  ✓
                </span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 leading-relaxed">
            ERP is a long-term investment that boosts growth, reduces cost, and
            improves business performance.
          </p>
        </div>

        {/* Right image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={erpukbusiness}
            alt="ERP for UK businesses"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ERPUKBUSINESS;
