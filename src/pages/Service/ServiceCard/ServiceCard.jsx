import React, { useState } from "react";
import simg1 from "../../../assets/images/s1.webp";
import simg2 from "../../../assets/images/s2.jpeg";
import simg3 from "../../../assets/images/s3.webp";
import simg4 from "../../../assets/images/s4.webp";
import simg5 from "../../../assets/images/s5.jpg";
import simg6 from "../../../assets/images/s6.webp";
import simg7 from "../../../assets/images/s7.webp";

import { SlHome } from "react-icons/sl";
import { RiArrowRightLine } from "react-icons/ri";
import RainbowGradientButton from "../../Button/RainbowGradientButton";
import { Link } from "react-router";

const ServiceCard = () => {
  const [activeId, setActiveId] = useState(null);

  const servicesData = [
    {
      id: 1,
      img: simg1,
      title: "Web Design And Development Solutions",
      slug: "web-design-development",
      desc: "At Orbit Media Solutions, we specialize in designing and developing bespoke, high-performance websites and web applications that not only engage users but also deliver seamless experiences across all.",
    },
    {
      id: 2,
      img: simg2,
      title: "E-Commerce Website Development",
      slug: "e-commerce-single-multi-vendor",
      desc: "Whether you want a single vendor online store or a full multi-vendor marketplace like Amazon, Etsy, or eBay, Orbit Media Solutions helps UK businesses launch high-performance e-commerce platforms.",
    },
    {
      id: 3,
      img: simg3,
      title: "Digital Marketing",
      slug: "digital-marketing",
      desc: "Want more leads, higher conversions, and increased revenue? That’s exactly what Orbit Media Solutions delivers.",
    },
    {
      id: 4,
      img: simg4,
      title: "News Portal Development",
      slug: "news-portal",
      desc: "We build fast, secure and engaging news portal websites for digital publishers and media organisations.",
    },
    {
      id: 5,
      img: simg5,
      title: "Mobile & Desktop App Development",
      slug: "mobile-desktop-application",
      desc: "Powerful, secure, and scalable mobile and desktop applications for modern businesses.",
    },
    {
      id: 6,
      img: simg6,
      title: "Custom Software Development Services",
      slug: "customed-software-solution",
      desc: "Custom software solutions that streamline operations and drive growth.",
    },
    {
      id: 7,
      img: simg7,
      title: "Blog Site Development",
      slug: "blog-site",
      desc: "High-performance blog websites that rank on Google and convert readers.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {servicesData.map((service) => {
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
                src={service.img}
                alt={service.title}
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
                  {service.title}
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
                  {service.desc}
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
        <RainbowGradientButton>View All Products</RainbowGradientButton>
      </div>
    </>
  );
};

export default ServiceCard;
