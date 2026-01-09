import React from "react";
import ServiceDetailDesign from "./ServiceDetailDesign/ServiceDetailDesign";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { sys } = useParams();

  const allowedServices = [
    "web-design-development",
    "e-commerce-single-multi-vendor",
    "digital-marketing",
    "mobile-desktop-application",
    "customed-software-solution",
    "news-portal",
    "blog-site",
  ];

  if (!allowedServices.includes(sys)) {
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        Service not found.
      </p>
    );
  }

  return <ServiceDetailDesign sys={sys} />;
};

export default ServiceDetails;
