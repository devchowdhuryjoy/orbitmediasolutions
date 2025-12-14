import React from 'react'
import simg1 from '../../../assets/images/s1.webp'
import simg2 from '../../../assets/images/s2.jpeg'
import simg3 from '../../../assets/images/s3.webp'
import simg4 from '../../../assets/images/s4.webp'
import simg5 from '../../../assets/images/s5.jpg'
import simg6 from '../../../assets/images/s6.webp'
import simg7 from '../../../assets/images/s7.webp'

import { SlHome } from "react-icons/sl";
import { RiArrowRightLine } from "react-icons/ri";


const ServiceCard = () => {
    const servicesData = [
  {
    id: 1,
    img: simg1,
    icon: "SlHome",
    title: "Web Design And Development Solutions",
    desc: "At Orbit Media Solutions, we specialize in designing and developing bespoke, high-performance websites and web applications that not only engage users but also deliver seamless experiences across all.",
    btnText: "Details"
  },
  {
    id: 2,
    img: simg2,
    icon: "SlHome",
    title: "E-Commerce Website Development",
    desc: "Whether you want a single vendor online store or a full multi-vendor marketplace like Amazon, Etsy, or eBay, Orbit Media Solutions helps UK businesses launch high-performance e-commerce platforms.",
    btnText: "Details"
  },
  {
    id: 3,
    img: simg3,
    icon: "SlHome",
    title: "Digital Marketing",
    desc: "Want more leads, higher conversions, and increased revenue? That’s exactly what Orbit Media Solutions delivers. We help UK businesses accelerate growth with strategic digital marketing that attracts.",
    btnText: "Details"
  },
  {
    id: 4,
    img: simg4,
    icon: "SlHome",
    title: "News Portal Development",
    desc: "At Orbit Media Solutions, we specialise in building fast, secure and engaging news portal websites for digital publishers and media organisations across the UK. Our expert developers create highly.",
    btnText: "Details"
  },
  {
    id: 5,
    img: simg5,
    icon: "SlHome",
    title: "Mobile & Desktop App Development",
    desc: "At Orbit Media Solutions, we design and develop powerful, secure, and scalable mobile and desktop applications that help UK businesses reach customers anytime, anywhere. Whether you need a.",
    btnText: "Details"
  },
  {
    id: 6,
    img: simg6,
    icon: "SlHome",
    title: "Custom Software Development Services",
    desc: "At Orbit Media Solutions, we specialize in custom software development solutions that go beyond coding to transform the way your business operates. Our services are designed to streamline",
    btnText: "Details"
  },
  {
    id: 7,
    img: simg7,
    icon: "SlHome",
    title: "Blog Site Development",
    desc: "Are you looking to grow your brand with a blog that attracts traffic, converts readers into customers, and ranks on Google’s first page? Orbit Media Solutions offers expert Blog Site Development Services.",
    btnText: "Details"
  }
];
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 justify-items-center">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="
              group w-96 bg-base-content shadow-md overflow-hidden
              transition-all duration-500 ease-in-out
              h-[340px] hover:h-[400px]
            "
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-38 object-cover"
            />

            {/* Body */}
            <div className="flex flex-col items-center px-4 pt-4">

              {/* Icon */}
              <div className="mb-2 p-2 rounded-full transition-all duration-300 group-hover:bg-blue-500">
                <SlHome className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h2 className="text-center text-white text-base md:text-lg font-semibold mb-2 leading-tight">
                {service.title}
              </h2>

              {/* Description */}
              <p
                className="
                  text-white text-sm leading-relaxed line-clamp-3
                  transition-all duration-300
                  group-hover:opacity-0 group-hover:translate-y-2
                "
              >
                {service.desc}
              </p>

              {/* Button */}
              <div
                className="
                  mt-4 opacity-0 translate-y-4
                  transition-all duration-500
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                 <button
                  className="
                inline-flex items-center gap-2
                btn btn-info
                text-white
                text-sm font-medium
                px-5 py-2
                rounded-full
                transition-all duration-300
                
                hover:gap-3
              "
                >
                  Details <RiArrowRightLine />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center mt-8">
        <button className="border-2 border-violet-500 font-semibold py-3 px-5 rounded-tr-2xl shadow-md transition-all duration-300 hover:scale-105">
          View All Products
        </button>
      </div>
    </>
    
  )
}

export default ServiceCard