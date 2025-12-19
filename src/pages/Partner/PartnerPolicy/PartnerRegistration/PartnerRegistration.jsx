import React from "react";

const PartnerRegistration = () => {
  return (
    <div>
      {/* Header inside card */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Partner Registration</h3>
        <p className="text-gray-600 text-sm">
          Complete this form to begin your partnership application process
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your Company Name"
            className="w-full input input-bordered"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full input input-bordered"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Your Business Email"
            className="w-full input input-bordered"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="+1 (123) 456-7890"
            className="w-full input input-bordered"
          />
        </div>

        {/* Business Type */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Type of Business <span className="text-red-500">*</span>
          </label>
          <select className="w-full select select-bordered">
            <option>Select your business type</option>
            <option>IT Services</option>
            <option>Consulting</option>
            <option>Marketing Agency</option>
            <option>Software Reseller</option>
            <option>Other</option>
          </select>
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Website (if applicable)
          </label>
          <input
            type="url"
            placeholder="https://yourwebsite.com"
            className="w-full input input-bordered"
          />
        </div>

        {/* About Business */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Tell us about your business <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Describe your business, clients, and why you want to partner with us"
            className="w-full textarea textarea-bordered"
          />
        </div>

        {/* Checkbox (aligned) */}
        <div className="flex items-center gap-2">
          <input id="agree" type="checkbox" className="checkbox checkbox-primary" />
          <label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
            I agree to the <span className="font-medium">Terms and Conditions</span> and{" "}
            <span className="font-medium">Privacy Policy</span>
          </label>
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-full">Submit Application</button>
      </form>
    </div>
  );
};

export default PartnerRegistration;
