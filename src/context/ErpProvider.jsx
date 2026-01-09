import React, { useState, useEffect } from "react";
import { ErpContext } from "./ErpContext";



export const ErpProvider = ({ children }) => {
  const [erpData, setErpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const res = await fetch("https://theorbit.one/api/product/erp-software");

        console.log(res);
        
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        const data = await res.json();
        setErpData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching ERP data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ErpContext.Provider value={{ erpData, loading, error }}>
      {children}
    </ErpContext.Provider>
  );
};


