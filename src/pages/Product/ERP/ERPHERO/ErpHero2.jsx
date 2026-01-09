import React from "react";
import BASE_URL from "../../../../ApiBaseUrl/ApiBaseUrl";

const ErpHero2 = ({ productData }) => {
  if (!productData) return null;

  const item = productData.item_product?.[0];
  if (!item) return null;

  const html = item.product_features_section3 || "";
  const image = item.section3_image ? `${BASE_URL}${item.section3_image}` : "";

  if (!html) return null;

  return (
    <section
      className="relative min-h-[75vh] flex items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-3xl text-white">
        <div
          className="
            space-y-4
            [&_h2]:text-3xl
            [&_h2]:md:text-4xl
            [&_h2]:lg:text-5xl
            [&_h2]:font-bold
            [&_h2]:mb-6
            [&_p]:text-base
            [&_p]:md:text-lg
            [&_p]:leading-7
            [&_blockquote]:border-l-4
            [&_blockquote]:border-white/40
            [&_blockquote]:pl-4
            [&_em]:text-gray-200
            [&_br]:block
          "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
};

export default ErpHero2;
