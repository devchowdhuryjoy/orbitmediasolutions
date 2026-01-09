import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ServiceDetailHero from "./ServiceDetailHero/ServiceDetailHero";
import DesignSolution from "./DesignSolution/DesignSolution";
import ServiceDetailFeaturedCard from "./ServiceDetailFeaturedCard/ServiceDetailFeaturedCard";
import WebDevelopmentServices from "./WebDevelopmentServices/WebDevelopmentServices";
import WebSolutions from "./WebSolutions/WebSolutions";
import ServiceDetailDarkHero from "./ServiceDetailDarkHero/ServiceDetailDarkHero";
import WebDevelopmentFeatures from "./WebDevelopmentFeatures/WebDevelopmentFeatures";

const ServiceDetailDesign = () => {
  const { sys } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://theorbit.one/api/services/${sys}`);
        const json = await res.json();

        if (json?.data) {
          setServiceData(json.data.service || {});
          setSliders(json.data.sliders || []);
        } else {
          setError("Service data not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch service data");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [sys]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center py-20 text-red-500">{error}</p>;

  return (
    <div>
      {/* Hero slider //done*/}
      <ServiceDetailHero sliders={sliders} />

      {/* Design solution //done*/}

      <DesignSolution serviceData={serviceData} />
      <ServiceDetailFeaturedCard serviceData={serviceData} />
      <WebDevelopmentServices serviceData={serviceData} />
      <WebSolutions serviceData={serviceData} />
      <ServiceDetailDarkHero serviceData={serviceData} />
      {/* ServiceDetailDarkHero fix dynamic korte hobe ei use effect onujai */}
      <WebDevelopmentFeatures serviceData={serviceData}/>
    </div>
  );
};

export default ServiceDetailDesign;
