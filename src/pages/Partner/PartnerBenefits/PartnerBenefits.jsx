import React from "react";
import { FaHandHoldingUsd, FaBullhorn, FaHeadset } from "react-icons/fa";

const PartnerBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaHandHoldingUsd className="text-4xl text-primary" />,
      title: "Lucrative Commissions",
      desc: "Earn industry-leading commissions with our tiered revenue sharing model that rewards your performance and helps you grow your income.",
    },
    {
      id: 2,
      icon: <FaBullhorn className="text-4xl text-primary" />,
      title: "Marketing Resources",
      desc: "Access our library of high-converting marketing materials, templates, and proven campaign strategies to accelerate your success.",
    },
    {
      id: 3,
      icon: <FaHeadset className="text-4xl text-primary" />,
      title: "Dedicated Support",
      desc: "Get personalized assistance from our partnership team to maximize your success and overcome any challenges you may face.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-base-200 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Why Partner With Us?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We provide everything you need to grow your business while delivering
            exceptional value to your clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="
                bg-gray-300 dark:bg-base-100
                rounded-2xl
                p-8
                text-center
                border border-base-200
                shadow-[0_12px_35px_-15px_rgba(0,0,0,0.25)]
                hover:shadow-[0_22px_55px_-20px_rgba(0,0,0,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-base-content/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
