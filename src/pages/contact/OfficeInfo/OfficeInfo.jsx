import React, { useEffect, useState } from "react";

const OfficeInfo = () => {
  const [setting, setSetting] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://theorbit.one/api/contact")
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && data?.data?.setting) {
          setSetting(data.data.setting); // ✅ use setting object
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Contact API error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-2xl border shadow-md">
        Loading office info...
      </div>
    );
  }

  if (!setting) {
    return (
      <div className="bg-white p-8 rounded-2xl border shadow-md">
        Office information not available
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Info */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-6">UK Office</h3>

        <div className="space-y-5 text-sm">
          <div>
            <p className="font-semibold text-gray-700">Location</p>
            <p className="text-gray-600">{setting.uk_address || "N/A"}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Contact Number</p>
            <p className="text-gray-600">{setting.contact_phone || "N/A"}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Our Email Address</p>
            <p className="text-primary font-medium">{setting.contact_email || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Map */}
      {setting.google_map && (
        <div className="mt-6 rounded-md overflow-hidden border border-gray-100">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              setting.uk_address
            )}&output=embed`}
            className="w-full h-56 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

export default OfficeInfo;
