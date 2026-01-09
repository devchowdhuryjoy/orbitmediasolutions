// src/pages/Product/ERP/ERP.jsx
import React, { useEffect, useState } from "react";
import ERPHERO from "./ERPHERO/ERPHERO";
import ERPSERVICE from "./ERPSERVICE/ERPSERVICE";
import ERPUKBUSINESS from "./ERPUKBUSINESS/ERPUKBUSINESS";
import ERPSOFTWARESERVICE from "./ERPSOFTWARESERVICE/ERPSOFTWARESERVICE";
import ERPIndustries from "./ERPIndustries/ERPIndustries";
import ErpHero2 from "./ERPHERO/ErpHero2";
import ERPSoftwareFeature from "./ERPSoftwareFeature/ERPSoftwareFeature";
import ERPFaq from "./ERPFaq/ERPFaq";

const ERP = ({ sys }) => {
  const [productData, setProductData] = useState(null);
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://theorbit.one/api/product/${sys}`);
      const json = await res.json();
      if (json?.data?.product) {
        setProductData(json.data.product);
        setSliders(json.data.sliders || []); // <-- sliders here
      } else {
        setError("Product data not found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch product data");
    } finally {
      setLoading(false);
    }
  };
  fetchProduct();
}, [sys]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center py-20 text-red-500">{error}</p>;

  return (
    <div>
      {/*  subcomponent productData prop wise */}
      <ERPHERO sliders={sliders} />
      <ERPSERVICE productData={productData} />
      <ERPUKBUSINESS productData={productData} />
      <ERPSOFTWARESERVICE productData={productData} />
      <ERPIndustries productData={productData} />
      <ErpHero2 productData={productData} />
      <ERPSoftwareFeature productData={productData} />
      <ERPFaq productData={productData} />
    </div>
  );
};

export default ERP;
