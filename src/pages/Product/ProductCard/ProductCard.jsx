import React, { useState } from "react";
import { SlHome } from "react-icons/sl";
import { RiArrowRightLine } from "react-icons/ri";
import pimg1 from "../../../assets/images/p1.webp";
import pimg2 from "../../../assets/images/p2.webp";
import pimg3 from "../../../assets/images/p3.webp";
import pimg4 from "../../../assets/images/p4.webp";
import pimg5 from "../../../assets/images/p5.webp";
import pimg6 from "../../../assets/images/p6.webp";
import pimg7 from "../../../assets/images/p7.webp";
import pimg8 from "../../../assets/images/p8.webp";
import pimg9 from "../../../assets/images/p9.webp";
import pimg10 from "../../../assets/images/p11.webp";
import pimg11 from "../../../assets/images/p11.webp";
import pimg12 from "../../../assets/images/p12.webp";
import pimg13 from "../../../assets/images/p13.webp";
import RainbowGradientButton from "../../Button/RainbowGradientButton";
import { Link } from "react-router";

const ProductCard = () => {
  const [activeId, setActiveId] = useState(null);
  const productsData = [
    {
      id: 1,
      img: pimg1,
      icon: "SlHome",
      title: "ERP Software Services UK",
      slug: "erp-software",
      desc: "Orbit Media Solutions provides modern ERP (Enterprise Resource Planning) Software Services to help UK businesses streamline operations, automate processes, reduce cost, and gain real-time.",
      btnText: "Details",
    },
    {
      id: 2,
      img: pimg2,
      icon: "SlHome",
      title: "HR Management Software in the UK",
      slug: "hr-management",
      desc: "Orbit Media Solutions brings you a complete, cloud-based Human Resources Management (HRM) Software designed specifically for UK companies, including SMEs, startups, and growing organisations..",
      btnText: "Details",
    },
    {
      id: 3,
      img: pimg3,
      icon: "SlHome",
      title: "Smart Cloud Inventory Control",
       slug: "inventory-management",
      desc: "Managing stock shouldn’t be complicated. If you’re dealing with overstocking, stockouts, messy spreadsheets, or multiple locations, it’s time for a smarter solution. Orbit’s cloud-based inventory.",
      btnText: "Details",
    },
    {
      id: 4,
      img: pimg4,
      icon: "SlHome",
      title: "Power Your UK Business with Smarter POS Software",
      slug: "pos-software",
      desc: "In today’s fast-moving UK retail and hospitality market, a simple cash register is no longer enough. Modern Point of Sale (POS) software has evolved into a strategic business tool that helps you manage",
      btnText: "Details",
    },
    {
      id: 5,
      img: pimg5,
      icon: "SlHome",
      title: "All-in-One Hotel Management Software in UK",
      slug: "hotel-management",
      desc: "Looking for the ultimate hotel management software UK? Orbit Media Solutions helps hoteliers streamline operations, increase revenue, and create exceptional guest experiences. Trusted by..",
      btnText: "Details",
    },
    {
      id: 6,
      img: pimg6,
      icon: "SlHome",
      title: "Accounting Software for Growing Businesses",
      slug: "accountant-software",
      desc: "Take control of your business finances with easy-to-use, cloud-based accounting software designed for UK small businesses, medium enterprises, and self-employed professionals. Automate..",
      btnText: "Details",
    },
    {
      id: 7,
      img: pimg7,
      icon: "SlHome",
      title: "Payroll Software for UK Businesses",
      slug: "payroll",
      desc: "At Orbit Media Solutions, we provide modern, cloud-based payroll software designed specifically for UK employers. Our HMRC-recognised system helps HR and payroll teams run payroll..",
      btnText: "Details",
    },
    {
      id: 8,
      img: pimg8,
      icon: "SlHome",
      title: "Education Management Software",
      slug: "education-management" ,
      desc: "At Orbit Media Solutions, we provide industry-leading education management software designed to streamline school operations, enhance learning, and empower educators. Our solutions are..",
      btnText: "Details",
    },
    {
      id: 9,
      img: pimg9,
      icon: "SlHome",
      title: "Law Firm Management Software UK",
      slug: "law-firm-management",
      desc: "At Orbit Media Solutions, we specialise in providing industry-leading law firm management software built specifically for UK solicitors, legal teams and growing practices. Our powerful, cloud-..",
      btnText: "Details",
    },
    {
      id: 10,
      img: pimg10,
      icon: "SlHome",
      title: "Restaurant / Takeaway Management Software UK",
      slug: "restaurant-management",
      desc: "Manage your restaurant with ease using our complete restaurant management software designed for the UK hospitality industry. Orbit Media Solutions provides one powerful platform that reduce..",
      btnText: "Details",
    },
    {
      id: 11,
      img: pimg11,
      icon: "SlHome",
      title: "Pharmacy Management Software",
       slug: "pharmacy-management",
      desc: "At Orbit Media Solutions, we provide advanced Pharmacy Management Software (PMS) in the UK designed to streamline day-to-day pharmacy operations. From automated prescriptions to..",
      btnText: "Details",
    },
    {
      id: 12,
      img: pimg12,
      icon: "SlHome",
      title: "Warehouse Management Software UK",
      slug:"warehouse-management-software",
      desc: "At Orbit Media Solutions, we provide advanced Warehouse Management Software (WMS) for UK ecommerce, 3PL, logistics and wholesale companies. Our powerful cloud-based WMS helps you..",
      btnText: "Details",
    },
    {
      id: 13,
      img: pimg13,
      icon: "SlHome",
      title: "Web Hosting",
      slug:"hosting-site",
      desc: "Looking for reliable UK web hosting that delivers speed, security and 24/7 support? Orbit Media Solutions provides premium hosting solutions designed for businesses, startups and e-commerce..",
      btnText: "Details",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {productsData.map((product) => {
          const isActive = activeId === product.id;

          return (
            <div
              key={product.id}
              onClick={() => setActiveId(isActive ? null : product.id)}
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
                src={product.img}
                alt={product.title}
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
                  {product.title}
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
                  {product.desc}
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
                  <Link to={`/product/${product.slug}`}><button className="inline-flex items-center gap-2 btn btn-info text-white text-sm px-5 py-2 rounded-full">
                    Details <RiArrowRightLine />
                  </button></Link>
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

export default ProductCard;
