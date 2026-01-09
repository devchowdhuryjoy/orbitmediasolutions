import React from "react";
import BASE_URL from "../../../../ApiBaseUrl/ApiBaseUrl";

const ERPUKBUSINESS = ({ productData }) => {
  if (!productData) return null;

  const item = productData.item_product?.[0] || {};
  const cleanText = (item.product_features || "").replace(/<[^>]*>/g, "").trim();
  const parts = cleanText.split("✔");

  const headingIntro = parts[0] || "";
  const heading = headingIntro.split("?")[0] + (headingIntro.includes("?") ? "?" : "");
  const intro = headingIntro.includes("?") ? headingIntro.split("?")[1].trim() : "";

  const benefits = parts.slice(1).map(p => p.trim()).filter(Boolean);

  // Use BASE_URL for the image path
  const image = item.section1_image
    ? `${BASE_URL.replace(/\/$/, "")}/${item.section1_image}`.replace(/ /g, "%20")
    : "";

  return (
    <section className="bg-white py-16 px-4 md:px-8 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{heading}</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{intro}</p>

          {benefits.length > 0 && (
            <>
              <h3 className="text-xl font-semibold text-gray-900">ERP Helps Businesses to:</h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-bold">✓</span>
                    <span className="text-base">{b}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Right image */}
        <div className="flex justify-center lg:justify-end">
          {image && <img src={image} alt={heading} className="w-full max-w-md md:max-w-lg rounded-2xl shadow-md" />}
        </div>
      </div>
    </section>
  );
};

export default ERPUKBUSINESS;
