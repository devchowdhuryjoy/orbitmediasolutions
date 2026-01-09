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
  const [message, setMessage] = useState({ text: "", type: "" }); // type: "success" | "error"
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
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
      // UPDATED: Using /api/contact based on your logs
      const res = await fetch(`${BASE_URL}api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", // Crucial for Laravel to return JSON errors
        },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json().catch(() => null);

      if (!res.ok) {
        // Handle Laravel Validation Errors specifically
        if (res.status === 422 && responseData?.errors) {
            // Optional: Map server errors back to field errors
            // setErrors(responseData.errors); 
            throw new Error("Please check the fields and try again.");
        }
        throw new Error(responseData?.message || "Submission failed. Please try again.");
      }

      setMessage({ text: "Your data has been submitted successfully!", type: "success" });
      
      // Reset Form
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
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col h-full">
      {/* Header */}
      <div className="pb-6 mb-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Get Started with a Free Quotation
        </h2>
        <p className="text-gray-600">We value open communication. Message us directly.</p>
      </div>

      {/* Form - NOW WRAPS THE BUTTON */}
      <form className="flex flex-col grow" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="First Name"
            name="firstName"
            placeholder="Smith"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            placeholder="Johnson"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <FormInput
            label="User Name"
            name="userName"
            placeholder="Johnson Milner"
            value={formData.userName}
            onChange={handleChange}
            error={errors.userName}
          />
          <FormInput
            label="Phone Number"
            name="phone"
            placeholder="+1-202-555-0174"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
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

        {/* Display Message */}
        {message.text && (
          <div
            className={`p-3 rounded-lg mb-4 text-center font-medium ${
              message.type === "success" 
                ? "bg-green-50 text-green-700 border border-green-200" 
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Submit Button Section */}
        <div className="pt-4 mt-auto border-t border-gray-100">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-8 py-3 rounded-lg shadow-sm text-white transition-all duration-300 ${
                isSubmitting 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-primary hover:bg-primary/90 hover:shadow-md"
            }`}
          >
            {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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