import React from "react";
import CareerHero from "../CareerHero/CareerHero";
import CareerBenefits from "../CareerBenefits/CareerBenefits";
import CareerStats from "../CareerStats/CareerStats";
import CareerForm from "../CareerForm/CareerForm";

const CareerPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <CareerHero />
      <CareerBenefits />
      <CareerStats />
      <CareerForm />
    </div>
  );
};

export default CareerPage;
