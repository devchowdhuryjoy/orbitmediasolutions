import React from "react";
import BASE_URL from "../../../../ApiBaseUrl/ApiBaseUrl";

const ERPSOFTWARESERVICE = ({ productData }) => {
  if (!productData) return null;

  // Modules table
  const modules = Array.isArray(productData.productfeatures) ? productData.productfeatures : [];

  // Function to get full URL
  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path; // already full URL
    return encodeURI(`${BASE_URL.replace(/\/$/, "")}/${path}`); // prepend base URL & encode spaces
  };

  // Determine image URL from multiple fallback options
  const imageUrl =
    getFullUrl(productData.section2_image) ||
    getFullUrl(productData.product_features_section3?.section2_image) ||
    getFullUrl(productData.item_product?.[0]?.product_image) ||
    "";

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10">
        {imageUrl && (
          <div className="flex justify-center lg:justify-start">
            <img
              src={imageUrl}
              alt="ERP Software Services"
              className="w-full max-w-md lg:max-w-lg rounded-sm shadow-xl object-cover"
            />
          </div>
        )}

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our ERP Software Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We offer end-to-end ERP development, implementation, customization, migration, and ongoing support for businesses.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">ERP Modules We Provide</h3>
          {modules.length > 0 ? (
            <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
              <table className="min-w-full border-collapse">
                <thead className="text-black">
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      ERP Module
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Features
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {modules.map((item, i) => (
                    <tr key={i} className="hover:bg-indigo-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {item.section_title || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.feature_description || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No ERP modules available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ERPSOFTWARESERVICE;
