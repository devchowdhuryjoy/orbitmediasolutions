import React, { useContext, useState } from "react";
// import simg1 from "../../../assets/images/s1.webp";
// import simg2 from "../../../assets/images/s2.jpeg";
// import simg3 from "../../../assets/images/s3.webp";
// import simg4 from "../../../assets/images/s4.webp";
// import simg5 from "../../../assets/images/s5.jpg";
// import simg6 from "../../../assets/images/s6.webp";
// import simg7 from "../../../assets/images/s7.webp";

import { SlHome } from "react-icons/sl";
import { RiArrowRightLine } from "react-icons/ri";
import RainbowGradientButton from "../../Button/RainbowGradientButton";
import { Link } from "react-router";
import { ServiceContext } from "../../../context/ServiceContext";

const ServiceCard = () => {
  const [activeId, setActiveId] = useState(null);
  const { services, loading } = useContext(ServiceContext);
  if (loading) {
    return <p className="text-center text-white">Loading products...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <div
              key={service.id}
              onClick={() => setActiveId(isActive ? null : service.id)}
              className={`
                group w-full max-w-[24rem]
                bg-base-content shadow-md overflow-hidden
                transition-all duration-500 ease-in-out
                cursor-pointer
                h-[340px]
                hover:h-[400px]
                ${isActive ? "h-[400px]" : ""}
              `}
            >
              {/* Image */}
              <img
                src={`https://theorbit.one/${service.service_image}`}
                alt={service.banner_title}
                className="w-full h-40 object-cover"
              />

              <div className="flex flex-col items-center px-4 pt-4">
                {/* Icon */}
                <div
                  className={`
                    mb-2 p-2 rounded-full transition-all duration-300
                    ${isActive ? "bg-blue-500" : "group-hover:bg-blue-500"}
                  `}
                >
                  <SlHome
                    className={`
                      text-white text-xl transition-transform duration-300
                      ${isActive ? "scale-110" : "group-hover:scale-110"}
                    `}
                  />
                </div>

                {/* Title */}
                <h2 className="text-center text-white text-base md:text-md font-semibold mb-2">
                  {service.banner_title}
                </h2>

                {/* Description */}
                <p
                  className={`
                    text-white text-sm leading-relaxed line-clamp-3
                    transition-all duration-300
                    ${
                      isActive
                        ? "opacity-0 translate-y-2"
                        : "group-hover:opacity-0 group-hover:translate-y-2"
                    }
                  `}
                >
                  {service.banner_description}
                </p>

                {/* Button */}
                <div
                  className={`
                    mt-4 transition-all duration-500
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                    }
                  `}
                >
                  <Link to={`/service/${service.slug}`}>
                    <button className="inline-flex items-center gap-2 btn btn-info text-white text-sm px-5 py-2 rounded-full">
                      Details <RiArrowRightLine />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/all-service">
          {" "}
          <RainbowGradientButton>View All Services</RainbowGradientButton>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
