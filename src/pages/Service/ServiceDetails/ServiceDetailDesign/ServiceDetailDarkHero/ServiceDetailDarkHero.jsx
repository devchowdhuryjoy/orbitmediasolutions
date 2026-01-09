import React from "react";
import BASE_URL from "../../../../../ApiBaseUrl/ApiBaseUrl";

const ServiceDetailDarkHero = ({ serviceData }) => {
  if (!serviceData) return null;

  const item = serviceData.itemservices?.[0];
  if (!item) return null;

  const html = item.service_features_section3 || "";

  let image = "";
  if (item.service_image_section3) {
    const rawUrl = item.service_image_section3.startsWith("http")
      ? item.service_image_section3
      : `${BASE_URL}${item.service_image_section3}`;

    // 🔥 THIS IS THE KEY DIFFERENCE
    image = encodeURI(rawUrl.trim());
  }

  if (!html) return null;

  return (
    <section
      className="relative min-h-[75vh] w-full flex items-center `"
      style={{
        backgroundImage: image ? `url("${image}")` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-3xl text-white">
        <div
          className="
            space-y-4
            [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:lg:text-5xl
            [&_h2]:font-bold [&_h2]:mb-6
            [&_p]:text-base [&_p]:md:text-lg [&_p]:leading-7
          "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
};

export default ServiceDetailDarkHero;
