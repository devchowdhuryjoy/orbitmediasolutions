import React from "react";
import FormInput from "../FormInput/FormInput";

const ContactForm = () => {
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
      {/* Header */}
      <div className="pb-6 mb-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Get Started with a Free Quotation
        </h2>
        <p className="text-gray-600">
          We value open communication and are here to help you with any
          questions or concerns. Message us directly.
        </p>
      </div>

      {/* Form */}
      <form className="grid md:grid-cols-2 gap-6 flex-grow">
        <FormInput label="First Name" placeholder="Smith" />
        <FormInput label="Last Name" placeholder="Johnson" />
        <FormInput label="User Name" placeholder="Johnson Milner" />
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

      {/* Button bottom aligned */}
      <div className="pt-6 mt-auto border-t border-gray-100">
        <button
          type="submit"
          className="
            w-full md:w-auto
            bg-primary
            text-white
            px-8
            py-3
            rounded-lg
            shadow-sm
            hover:shadow-md
            hover:bg-primary/90
            transition-all duration-300
          "
        >
          Update Info
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
