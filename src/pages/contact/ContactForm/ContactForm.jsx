import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import BASE_URL from "../../../ApiBaseUrl/ApiBaseUrl";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "First Name is required";
    if (!formData.lastName.trim()) errs.lastName = "Last Name is required";
    if (!formData.userName.trim()) errs.userName = "User Name is required";
    if (!formData.phone.trim()) errs.phone = "Phone Number is required";
    if (!formData.bio.trim()) errs.bio = "Bio is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch(`${BASE_URL}api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json().catch(() => null);

      if (!res.ok) {
        if (res.status === 422 && responseData?.errors) {
          throw new Error("Please check the fields and try again.");
        }
        throw new Error(responseData?.message || "Submission failed. Please try again.");
      }

      setMessage({ text: "Your data has been submitted successfully!", type: "success" });
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        phone: "",
        bio: "",
      });
      setErrors({});
    } catch (err) {
      setMessage({ text: err.message, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-md flex flex-col h-full w-full max-w-3xl mx-auto text-black">
      
      {/* Header */}
      <div className="pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-gray-200">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-black">
          Get Started with a Free Quotation
        </h2>
        <p className="text-sm sm:text-base text-black">
          We value open communication. Message us directly.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col grow" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <FormInput label="First Name" name="firstName" placeholder="Smith" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
          <FormInput label="Last Name" name="lastName" placeholder="Johnson" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
          <FormInput label="User Name" name="userName" placeholder="Johnson Milner" value={formData.userName} onChange={handleChange} error={errors.userName} />
          <FormInput label="Phone Number" name="phone" placeholder="+1-202-555-0174" value={formData.phone} onChange={handleChange} error={errors.phone} />

          <div className="md:col-span-2">
            <FormInput
              label="Bio"
              name="bio"
              textarea
              rows="4"
              placeholder="Tell us something..."
              value={formData.bio}
              onChange={handleChange}
              error={errors.bio}
            />
          </div>
        </div>

        {/* Message */}
        {message.text && (
          <div
            className={`p-3 rounded-lg mb-4 text-center text-sm sm:text-base font-medium border ${
              message.type === "success"
                ? "bg-white text-black border-black/20"
                : "bg-white text-black border-black/20"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Button */}
        <div className="pt-4 mt-auto border-t border-gray-200 flex justify-center md:justify-start">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-auto px-8 py-3 rounded-lg shadow-sm transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-300 text-black cursor-not-allowed"
                : "bg-indigo-500 text-white hover:indigo-600 hover:shadow-md"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </span>
            ) : (
              "Update Info"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
