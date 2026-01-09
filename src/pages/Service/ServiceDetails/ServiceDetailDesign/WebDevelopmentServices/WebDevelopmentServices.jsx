import React from "react";
import BASE_URL from "../../../../../ApiBaseUrl/ApiBaseUrl"; // adjust path if needed

const WebDevelopmentServices = ({ serviceData }) => {
  if (!serviceData || !serviceData.itemservices?.length) return null;

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {serviceData.itemservices.map((item) => {
        // Make sure the image URL is full
        const imageUrl = item.service_image_section2
          ? item.service_image_section2.startsWith("http")
            ? item.service_image_section2
            : `${BASE_URL}${item.service_image_section2}`
          : "";

        return (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-sm border border-gray-100"
          >
            {/* Left Side – Content */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {item.banner_title}
              </h2>

              {/* First description */}
              {/* {item.banner_description && (
                <p
                  className="text-gray-600 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: item.banner_description }}
                />
              )} */}

              {/* Optional second section */}
              {item.service_features_section2 && (
                <div
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: item.service_features_section2,
                  }}
                />
              )}

              {/* Optional third section */}
              {/* {item.service_features_section3 && (
                <div
                  className="text-gray-600 leading-relaxed mt-6"
                  dangerouslySetInnerHTML={{
                    __html: item.service_features_section3,
                  }}
                />
              )} */}
            </div>
            {/*Right Side – Image */}
            <div>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={item.banner_title || "Featured Service"}
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              )}
            </div>

            
          </div>
        );
      })}
    </div>
  );
};


export default WebDevelopmentServices;
