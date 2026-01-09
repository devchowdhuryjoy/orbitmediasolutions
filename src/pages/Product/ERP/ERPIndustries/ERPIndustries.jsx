import React from "react";
const ERPIndustries = ({ productData }) => {
  if (!productData) return null;
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      {" "}
      <div className="container mx-auto p-10">
        {" "}
        {productData.product_name && (
          <div className="text-center mb-0">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              {" "}
              {productData.product_name
                .replace(/[-\s]*ERP[-\s]*/gi, "")
                .trim()}{" "}
            </h2>{" "}
            {productData.item_product?.[0]?.contain_add && (
              <div
                className="mt-4 text-black"
                dangerouslySetInnerHTML={{
                  __html: productData.item_product[0].contain_add,
                }}
              />
            )}{" "}
          </div>
        )}{" "}
      </div>{" "}
    </section>
  );
};
export default ERPIndustries;
// 1
// 2
// 3
// 4