import React, { useEffect, useState } from "react";

const IndustriesHeader = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://theorbit.one/api/product/erp-software"
        );
        if (!response.ok) throw new Error("Failed to fetch API");

        const data = await response.json();
        const product = data?.data?.product;
        const item = product?.item_product?.[0];

        // More robust removal of "ERP" anywhere (dash, space, case-insensitive)
        let cleanTitle = product?.product_name || "";
        cleanTitle = cleanTitle.replace(/[-\s]*ERP[-\s]*/gi, "").trim();

        setTitle(cleanTitle);
        setDescription(item?.contain_add);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div >
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        <div
          className="mt-4 text-gray-600"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default IndustriesHeader;
