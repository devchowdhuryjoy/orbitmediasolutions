import React from "react";

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <input
      {...props}
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

const CareerForm = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Join Our Team</h2>
        <p className="text-gray-600">
          Fill out the form below to apply for a position at our company
        </p>
      </div>

      <form className="grid md:grid-cols-2 gap-6">
        <Input label="First Name" placeholder="Your first name" />
        <Input label="Last Name" placeholder="Your last name" />
        <Input label="Email" type="email" placeholder="example@email.com" />
        <Input label="Phone Number" placeholder="+1 (123) 456-7890" />
        <Input
          label="Applying for Position"
          placeholder="e.g. Frontend Developer"
        />
        <Input label="When can you start?" type="date" />

        {/* Cover Letter */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Cover Letter</label>
          <textarea
            rows="4"
            placeholder="Tell us why you'd be a great fit..."
            className="w-full border rounded-lg px-4 py-2"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="md:col-span-2 flex items-start gap-2">
          <input type="checkbox" className="mt-1" />
          <p className="text-sm text-gray-600">
            I agree to the privacy policy and consent to the processing of my
            personal data.
          </p>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default CareerForm;
