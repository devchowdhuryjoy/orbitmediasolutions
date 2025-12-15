import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../../assets/logo-w.png';
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Left Side */}
        <div>
          <img
            src={logo}
            alt="Orbit Media Solutions"
            className="w-32 mb-4"
          />
          <p className="text-gray-600 leading-relaxed">
            Orbit Media Solutions empowers businesses with smart digital
            solutions from web design, apps, ERP & CRM to SEO, digital marketing
            & creative media. Since 2018, we’ve been helping brands innovate,
            grow & succeed. Let’s take your business to the next level!
          </p>

          {/* Map */}
          <div className="mt-6 rounded-md overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.9292884697293!2d0.007239075859600744!3d51.56952980616355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a76511dcd7c1%3A0x9a7f1d1296152e2a!2sKirkdale%20House!5e0!3m2!1sen!2sbd!4v1765528027005!5m2!1sen!2sbd"
    width="100%"
    height="200"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Quick Links</h2>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="space-y-2">
              <Link to="/about" className="hover:text-violet-500 block">About</Link>
              <Link to="/blog" className="hover:text-violet-500 block">Blog</Link>
              <Link to="/career" className="hover:text-violet-500 block">Career</Link>
              <Link to="/contact" className="hover:text-violet-500 block">Contact</Link>
            </div>

            <div className="space-y-2">
              <Link to="/services" className="hover:text-violet-500 block">All Services</Link>
              <Link to="/products" className="hover:text-violet-500 block">All Products</Link>
              <Link to="/partner" className="hover:text-violet-500 block">Partner</Link>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Contact</h2>

          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Director:</span> MD. Shamsul Alam
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-violet-500 mt-1" />
              Head Office: Kirkdale House, 7 Kirkdale Road, Leytonstone,  
              E11 1HP, London, UK
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-violet-500" />
              00447935390848
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-violet-500" />
              info@theorbit.one
            </p>
          </div>
        </div>

      </div>

     
    </footer>
  );
};

export default Footer;
