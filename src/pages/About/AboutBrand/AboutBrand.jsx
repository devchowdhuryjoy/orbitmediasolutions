import brand1 from "../../../assets/images/brands/mapbox.png";
import brand2 from "../../../assets/images/brands/slack.png";
import brand3 from "../../../assets/images/brands/spotify.png";
import brand4 from "../../../assets/images/brands/strapi.png";
import brand5 from "../../../assets/images/brands/woocommerce.png";

const AboutBrand = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <section className="w-full">
      {/* ===== Section Title ===== */}
      <div className="bg-white py-6 sm:py-8">
        <h3 className="text-center text-indigo-700 uppercase tracking-wider
          text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Our Brands
        </h3>
      </div>

      {/* ===== Brand Ticker (Transparent Section, Images Visible) ===== */}
      <div className="w-full overflow-hidden py-3 sm:py-4">
        <div
          className="
            flex items-center whitespace-nowrap
            gap-10 sm:gap-14 md:gap-16 lg:gap-20
            animate-[marquee_25s_linear_infinite]
            sm:animate-[marquee_22s_linear_infinite]
            md:animate-[marquee_20s_linear_infinite]
            hover:[animation-play-state:paused]
          "
        >
          {[...brands, ...brands].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`brand-${index + 1}`}
              className="
                object-contain
                h-6 sm:h-8 md:h-10 lg:h-12
                opacity-90 transition-opacity duration-300
                hover:opacity-100
                bg-gray-300
                p-1
                rounded
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
