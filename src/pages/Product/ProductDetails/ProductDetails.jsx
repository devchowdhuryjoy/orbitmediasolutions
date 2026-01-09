import React from "react";
import { useParams } from "react-router-dom";
import ERP from "../ERP/ERP";

const ProductDetails = () => {
  const { sys } = useParams();

  const allowedProducts = [
    "erp-software",
    "hr-management-software",
    "inventory-management-software",
    "accountant-software",
    "payroll-software",
    "pos-software",
    "hotel-management-software",
    "education-management-software",
    "law-firm-management-software",
    "restaurant-takeaway-management-software",
    "pharmacy-management-software",
  ];

  if (!allowedProducts.includes(sys)) {
    return <p className="text-center mt-20 text-red-500">Product not found.</p>;
  }

  return <ERP sys={sys} />;
};

export default ProductDetails;
