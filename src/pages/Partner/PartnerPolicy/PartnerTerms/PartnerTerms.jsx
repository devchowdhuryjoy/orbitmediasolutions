import React from "react";

const PartnerTerms = () => {
  return (
    <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Partnership Terms & Conditions
      </h3>

      <div>
        <h4 className="font-semibold text-gray-800 mb-1">1. Partnership Eligibility</h4>
        <p>
          Applicants must operate a legally registered business with relevant industry experience. Approval is at our discretion.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-1">2. Commission Structure</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Standard Tier: 20% commission</li>
          <li>Silver Tier: 25% (after $10,000 referrals)</li>
          <li>Gold Tier: 30% (after $50,000 referrals)</li>
        </ul>
        <p className="mt-2">Commissions are paid monthly via PayPal or bank transfer.</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-1">3. Marketing Guidelines</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>No misleading claims</li>
          <li>No spam marketing</li>
          <li>No bidding on branded keywords</li>
          <li>No false representation</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-1">4. Confidentiality Agreement</h4>
        <p>
          All shared information is confidential and may not be disclosed without written consent.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-1">5. Program Termination</h4>
        <p>Either party may terminate with 30 days written notice.</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-1">6. Agreement Modifications</h4>
        <p>Terms may be updated with 30 days notice.</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-1">7. Contact Information</h4>
        <p>Contact our partnership team for any questions.</p>
      </div>
    </div>
  );
};

export default PartnerTerms;
