import React from "react";
import PartnerHero from "./PartnerHero/PartnerHero";
import PartnerBenefits from "./PartnerBenefits/PartnerBenefits";
import PartnerPolicy from "./PartnerPolicy/PartnerPolicy";


const Partner = () => {
  return (
    <div>
      <PartnerHero/>
      <PartnerBenefits/>
      <PartnerPolicy/>
    </div>
  );
};

export default Partner;
