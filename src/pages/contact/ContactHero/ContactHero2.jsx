import React from "react";
import cHero from "../../../assets/contact/contact.jfif";
import { useNavigate } from "react-router-dom"; // <- note this

const ContactHero2 = () => {
  const navigate = useNavigate(); // get navigate function

  const handleApplyClick = () => {
    navigate("/career"); // programmatic navigation
  };

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

          {/* Button with programmatic navigation */}
          <button onClick={handleApplyClick} className="btn btn-primary">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactHero2;
