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
import { div } from 'framer-motion/client'

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
        <div key={service.id} className="card bg-base-content w-96 shadow-sm">
          <figure>
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </figure>

          <div className="card-body flex flex-col items-center ">
            <div className="card-actions justify-center mb-2">
              <SlHome className='text-white text-2xl'/>
            </div>

            <h1 className='text-center text-white text-lg md:text-xl font-semibold mb-2'>
              {service.title}
            </h1>

            <p className="text-white text-sm md:text-base text-center whitespace-normal hyphens-auto  leading-relaxed m-0 [text-justify:inter-word]">
              {service.desc}
            </p>

            <div className="card-actions justify-center mt-4">
              <button className="btn btn-active btn-info text-white flex items-center gap-2">
                {service.btnText} <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      ))}
     
    </div>
    <div className='flex items-center justify-center'>
        <button className="cursor-pointer bg-transparent  border-2 border-violet-500 font-semibold py-3 px-8 rounded-tr-2xl shadow-md transition-all duration-300 transform hover:scale-105">View All Products</button>
    </div>
    </>
    
  )
}

export default ServiceCard