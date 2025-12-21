import React from "react";

const FormInput = ({ label, textarea = false, ...props }) => {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>

      {textarea ? (
        <textarea
          {...props}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      ) : (
        <input
          {...props}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      )}
    </div>
  );
};

export default FormInput;
