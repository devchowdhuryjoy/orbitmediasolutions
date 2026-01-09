import React from "react";

const WebSolutions = ({ serviceData }) => {
  if (!serviceData) return null;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto px-0 sm:px-4 lg:px-10">
        
        {serviceData.service_name && (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              {serviceData.service_name
                .replace(/[-\s]*ERP[-\s]*/gi, "")
                .trim()}
            </h2>

            {serviceData.itemservices?.[0]?.contain_add && (
              <div
                className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-black leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: serviceData.itemservices[0].contain_add,
                }}
              />
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default WebSolutions;
