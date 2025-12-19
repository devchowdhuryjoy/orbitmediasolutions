import React from "react";
import PartnerRegistration from "./PartnerRegistration/PartnerRegistration";
import PartnerTerms from "./PartnerTerms/PartnerTerms";

const PartnerPolicy = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Become a Partner</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our partnership program and start growing your business with us.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Registration Form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg border h-full">
              <PartnerRegistration />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg border h-full">
              <PartnerTerms />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPolicy;
