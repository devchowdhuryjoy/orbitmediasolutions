import React from "react";

const OfficeInfo = () => {
  return (
    <div
      className="
        bg-white
        p-8
        rounded-2xl
        border border-gray-200
        shadow-md
        hover:shadow-lg
        transition-shadow duration-300
        h-full
        flex
        flex-col
      "
    >
      {/* Info */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-6">UK Office</h3>

        <div className="space-y-5 text-sm">
          <div>
            <p className="font-semibold text-gray-700">Location</p>
            <p className="text-gray-600">
              Head Office: Kirkdale House, 7 Kirkdale Road, Leytonstone, E11
              1HP, London, UK
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Contact Number</p>
            <p className="text-gray-600">00447935390848</p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Our Email Address</p>
            <p className="text-primary font-medium">info@theorbit.one</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-6 rounded-md overflow-hidden border border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.9292884697293!2d0.007239075859600744!3d51.56952980616355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a76511dcd7c1%3A0x9a7f1d1296152e2a!2sKirkdale%20House!5e0!3m2!1sen!2sbd!4v1765528027005!5m2!1sen!2sbd"
          className="w-full h-56 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default OfficeInfo;
