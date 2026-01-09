import React from "react";

const Faq = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto">
        {/* Heading */}
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
          FAQs
        </h3>

        {/* FAQ Items */}
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-base sm:text-lg font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm sm:text-base leading-relaxed">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-base sm:text-lg font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm sm:text-base leading-relaxed">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-base sm:text-lg font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm sm:text-base leading-relaxed">
              Go to "My Account" settings and select "Edit Profile" to make changes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
