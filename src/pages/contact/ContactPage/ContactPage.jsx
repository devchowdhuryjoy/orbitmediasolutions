import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import OfficeInfo from "../OfficeInfo/OfficeInfo";
import ContactHero from "../ContactHero/ContactHero";
import ContactHero2 from "../ContactHero/ContactHero2";


const ContactPage = () => {
  return (
    <div className="">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8 items-stretch">
        {/* Form */}
        <div className="lg:col-span-2 h-full">
          <ContactForm />
        </div>

        {/* Office Info */}
        <div className="h-full">
          <OfficeInfo />
        </div>
      </div>
      <ContactHero2 />
    </div>
  );
};

export default ContactPage;
