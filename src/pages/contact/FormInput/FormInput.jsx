import React from "react";

// Reusable Input Component
const FormInput = ({ label, name, textarea, error, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 font-medium text-gray-700">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          className={`border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
            error ? "border-red-500 focus:ring-red-200" : "border-gray-300"
          }`}
          {...props}
        />
      ) : (
        <input
          id={name}
          name={name}
          className={`border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
            error ? "border-red-500 focus:ring-red-200" : "border-gray-300"
          }`}
          {...props}
        />
      )}
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default FormInput;
