import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

/**
 * Convert any Google Maps input to an iframe-safe embed URL
 * Backend agnostic (place / embed / short link safe)
 */
const getGoogleMapEmbedUrl = (mapUrl, address) => {
  // Backend already sends iframe-friendly embed URL
  if (mapUrl && mapUrl.includes("/maps/embed")) {
    return mapUrl;
  }

  // Otherwise generate from address
  if (address) {
    return `https://www.google.com/maps?q=${encodeURIComponent(
      address
    )}&output=embed`;
  }

  return null;
};

const Footer = () => {
  const [setting, setSetting] = useState(null);

  useEffect(() => {
    fetch("https://theorbit.one/api/contact")
      .then((res) => res.json())
      .then((data) => setSetting(data?.data?.setting))
      .catch((err) => console.error("Footer API error:", err));
  }, []);

  if (!setting) return null;

  const {
    logo,
    director_name,
    uk_address,
    contact_phone,
    contact_email,
    footer_short,
    google_map,
  } = setting;

  // Generate safe map URL
  const mapSrc = getGoogleMapEmbedUrl(google_map, uk_address);

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Left: Logo + Description + Map */}
        <div>
          <img
            src={
              logo
                ? `https://theorbit.one/${logo.replace(/^\/+/, "")}` // Safe join
                : "/logo-fallback.png"
            }
            alt="Orbit Media Solutions"
            className="w-32 mb-4 object-contain"
            loading="lazy"
            onError={(e) => (e.currentTarget.src = "/logo-fallback.png")}
          />

          <p className="text-gray-600 leading-relaxed">
            {footer_short}
          </p>

          {mapSrc && (
            <div className="mt-6 rounded-md overflow-hidden border border-gray-100">
              <iframe
                src={mapSrc}
                className="w-full h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          )}
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
              <Link to="/all-service" className="hover:text-violet-500 block">All Services</Link>
              <Link to="/all-products" className="hover:text-violet-500 block">All Products</Link>
              <Link to="/partners" className="hover:text-violet-500 block">Partner</Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Contact</h2>

          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Director:</span> {director_name}
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-violet-500 mt-1" />
              {uk_address}
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-violet-500" />
              {contact_phone}
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-violet-500" />
              {contact_email}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
