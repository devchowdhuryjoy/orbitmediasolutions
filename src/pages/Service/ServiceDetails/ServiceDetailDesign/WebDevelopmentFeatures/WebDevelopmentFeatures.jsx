import React from "react";
import { FaPaintBrush } from "react-icons/fa";

const WebDevelopmentFeatures = ({ serviceData }) => {
  if (!serviceData) return null;

  const features = Array.isArray(serviceData.servicefeatures)
    ? serviceData.servicefeatures
    : [];

  if (!features.length) return null;

  const folderClipPath =
    "polygon(0 0, 45% 0, 52% 12%, 100% 12%, 100% 100%, 0 100%)";

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative p-px group transition-transform duration-300 hover:-translate-y-2 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, #6a48f2 0%, #ec4899 100%)",
                clipPath: folderClipPath,
              }}
            >
              <div
                className="bg-white p-8 h-full flex flex-col items-start text-left rounded-xl"
                style={{
                  clipPath: folderClipPath,
                  paddingTop: "3rem",
                }}
              >
                {/* Icon */}
                <div className="mb-6 text-purple-600 text-3xl opacity-80 group-hover:opacity-100 transition-opacity">
                  <FaPaintBrush />
                </div>

                {/* Content */}
                <h2 className="text-black text-xl font-bold mb-2">
                  {feature.feature_title}
                </h2>

                {feature.feature_sub_title && (
                  <h3 className="text-black font-semibold mb-4 text-xs uppercase tracking-[1px]">
                    {feature.feature_sub_title}
                  </h3>
                )}

                <p className="text-black text-sm leading-relaxed">
                  {feature.feature_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentFeatures;
