import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// Reusable Input Component
const Input = ({ label, register, name, error, rules, ...props }) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <input
      {...register(name, rules)}
      {...props}
      className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
        error ? "border-red-500 focus:ring-red-200" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle validation errors
  const onError = (errors) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill out the form.!",
      draggable: true
    });
  };

  // Handle successful submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("startDate", data.startDate);
      formData.append("street", data.street);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("postal", data.postal);
      formData.append("country", data.country);
      formData.append("coverLetter", data.coverLetter);
      
      if (data.resume && data.resume[0]) {
        formData.append("resume", data.resume[0]);
      }

      const res = await fetch("https://theorbit.one/api/career-submit", {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      Swal.fire({
        title: "Application Submitted",
        text: "Contact Request Success",
        icon: "success",
        draggable: true
      });

      reset();

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Join Our Team</h2>
        <p className="text-gray-600">
          Fill out the form below to apply for a position at our company
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)} className="grid md:grid-cols-2 gap-6">
        
        {/* Basic Info */}
        <Input
          label="First Name"
          name="firstName"
          placeholder="Your first name"
          register={register}
          error={errors.firstName?.message}
          rules={{ required: "First name is required" }}
        />
        <Input
          label="Last Name"
          name="lastName"
          placeholder="Your last name"
          register={register}
          error={errors.lastName?.message}
          rules={{ required: "Last name is required" }}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="example@email.com"
          register={register}
          error={errors.email?.message}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
        />
        <Input
          label="Phone Number"
          name="phone"
          placeholder="+1 (123) 456-7890"
          register={register}
          error={errors.phone?.message}
          rules={{ required: "Phone number is required" }}
        />
        <Input
          label="Applying for Position"
          name="position"
          placeholder="e.g. Frontend Developer"
          register={register}
          error={errors.position?.message}
          rules={{ required: "Position is required" }}
        />
        <Input
          label="When can you start?"
          name="startDate"
          type="date"
          register={register}
          error={errors.startDate?.message}
          rules={{ required: "Start date is required" }}
        />

        {/* Address Fields */}
        <Input
          label="Street Address"
          name="street"
          placeholder="123 Main St"
          register={register}
          error={errors.street?.message}
          rules={{ required: "Street address is required" }}
        />
        <Input
          label="City"
          name="city"
          placeholder="City"
          register={register}
          error={errors.city?.message}
          rules={{ required: "City is required" }}
        />
        <Input
          label="State / Province"
          name="state"
          placeholder="State / Province"
          register={register}
          error={errors.state?.message}
          rules={{ required: "State / Province is required" }}
        />
        <Input
          label="Postal / Zip Code"
          name="postal"
          placeholder="Postal / Zip Code"
          register={register}
          error={errors.postal?.message}
          rules={{ required: "Postal / Zip Code is required" }}
        />

        {/* Country Select */}
        <div>
          <label className="block mb-1 font-medium">Country</label>
          <select
            {...register("country", { required: "Country is required" })}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.country ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
        </div>

        {/* Resume Upload */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700">Upload Resume (PDF, DOC, DOCX)</label>
          <div className={`border rounded-lg p-1 bg-gray-50 ${
                errors.resume ? "border-red-500" : "border-gray-300"
            }`}>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              {...register("resume", { required: "Resume is required" })}
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-white file:text-gray-700
                file:cursor-pointer hover:file:bg-gray-100
                cursor-pointer focus:outline-none"
            />
          </div>
          {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>}
        </div>

        {/* Cover Letter */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Cover Letter</label>
          <textarea
            {...register("coverLetter", {
              required: "Cover letter is required",
              minLength: { value: 20, message: "Minimum 20 characters required" },
            })}
            rows="4"
            placeholder="Tell us why you'd be a great fit..."
            className={`w-full border rounded-lg px-4 py-2 ${
                errors.coverLetter ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>}
        </div>

        {/* Checkbox */}
        <div className="md:col-span-2">
            <div className="flex items-start gap-2">
            <input
                type="checkbox"
                {...register("agree", { required: "You must agree to continue" })}
                className="mt-1"
            />
            <p className="text-sm text-gray-600">
                I agree to the privacy policy and consent to the processing of my personal data.
            </p>
            </div>
            {errors.agree && (
            <p className="text-red-500 text-sm mt-1">{errors.agree.message}</p>
            )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-lg text-white transition ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary/90"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CareerForm;