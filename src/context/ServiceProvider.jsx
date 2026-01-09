import React, { useEffect, useState } from "react";
import { ServiceContext } from "./ServiceContext";


export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("https://theorbit.one/api/all-services");
        const result = await res.json();
        setServices(result.services?.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <ServiceContext.Provider value={{ services, loading }}>
      {children}
    </ServiceContext.Provider>
  );
};
