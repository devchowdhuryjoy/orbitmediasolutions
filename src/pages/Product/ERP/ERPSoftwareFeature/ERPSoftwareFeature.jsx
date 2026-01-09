import React from "react";
import { FaPaintbrush } from "react-icons/fa6";

const ERPSoftwareFeature = ({ productData }) => {
  if (!productData) return null;

  const features = productData.productfeatures || [];
  const folderClipPath = "polygon(0 0, 45% 0, 52% 12%, 100% 12%, 100% 100%, 0 100%)";

  if (!features.length) return null;

  return (
    <div className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-16">ERP Software Services Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((erp) => (
            <div
              key={erp.id}
              className="relative p-px group transition-transform duration-300 hover:-translate-y-2 rounded-xl"
              style={{ background: "linear-gradient(135deg, #6a48f2 0%, #ec4899 100%)", clipPath: folderClipPath }}
            >
              <div className="bg-white p-8 h-full flex flex-col items-start text-left rounded-xl" style={{ clipPath: folderClipPath, paddingTop: "3rem" }}>
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-3xl"><FaPaintbrush /></span>
                </div>
                <h2 className="text-black text-2xl font-bold mb-2">{erp.feature_title}</h2>
                <h3 className="text-black font-semibold mb-4 text-xs uppercase tracking-[1px]">{erp.feature_sub_title}</h3>
                <p className="text-black text-sm leading-relaxed">{erp.feature_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPSoftwareFeature;
