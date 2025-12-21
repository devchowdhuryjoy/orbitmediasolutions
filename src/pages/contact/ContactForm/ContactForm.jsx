import React from "react";
import FormInput from "../FormInput/FormInput";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Get Started with a Free Quotation
        </h2>
        <p className="text-gray-600 mb-8">
          Contact us by filling out the form below.
        </p>

        <form className="grid md:grid-cols-2 gap-6">
          <FormInput label="First Name" placeholder="Smith" />
          <FormInput label="Last Name" placeholder="Jonson" />
          <FormInput label="User Name" placeholder="Jonson Milner" />
          <FormInput label="Phone Number" placeholder="+1-202-555-0174" />

          <div className="md:col-span-2">
            <FormInput
              label="Bio"
              textarea
              rows="4"
              placeholder="Tell us something..."
            />
          </div>
        </form>
      </div>

      {/* Button bottom aligned */}
      <div className="mt-auto pt-6">
        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
        >
          Update Info
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
