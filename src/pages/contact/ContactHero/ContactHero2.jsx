import React from "react";
import cHero from "../../../assets/contact/contact.jfif";
import { Link } from "react-router";

const ContactHero2 = () => {
  return (
    <div
      className="hero min-h-[45vh] sm:min-h-[55vh] md:min-h-[70vh] lg:min-h-[80vh]"
      style={{
        backgroundImage: `url(${cHero})`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay bg-black/60"></div>

      {/* Content */}
      <div className="hero-content text-neutral-content text-center px-4">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
            Get in Touch With Us
          </h1>

          <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
            We’d love to hear from you. Feel free to reach out with any
            questions or inquiries.
          </p>

          {/* Optional Button */}
          <Link to="/career">
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactHero2;
