import React from "react";
import s2 from "../../../../../assets/service/service2.png";

const WebDevelopmentServices = () => {
  const services = [
    {
      title: "UI/UX Web Design",
      description: (
        <>
          We craft visually stunning, accessible, and brand-consistent
          interfaces using <strong>Figma and Adobe Creative Cloud</strong>.
          Every design is pixel-perfect, cross-platform responsive, and
          conversion-focused.
        </>
      ),
    },
    {
      title: "Frontend Development",
      description: (
        <>
          Our team builds <strong>fast, SEO-friendly interfaces</strong> using
          modern frameworks that work seamlessly on all devices. Whether
          monolithic or micro-frontend architecture, your website performs
          flawlessly.
        </>
      ),
    },
    {
      title: "Backend Development",
      description: (
        <>
          From <strong>Node.js to Python</strong>, we create secure, scalable
          server-side solutions with efficient data processing, robust APIs, and
          smooth frontend integration.
        </>
      ),
    },
    {
      title: "Full-Stack Development",
      description: (
        <>
          Our full-stack services provide <strong>end-to-end solutions</strong>,
          delivering connected, maintainable, and dynamic web applications for a
          seamless user experience.
        </>
      ),
    },
    {
      title: "No/Low-Code Development",
      description: (
        <>
          Accelerate your projects with{" "}
          <strong>no-code and low-code platforms</strong> like OutSystems and
          Appian, building robust applications faster without compromising
          scalability.
        </>
      ),
    },
    {
      title: "Cloud Development",
      description: (
        <>
          Maximise performance and uptime with{" "}
          <strong>AWS, Azure, or Google Cloud</strong>, ensuring security,
          cost-effectiveness, and effortless scaling.
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side – Services List */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-10">
            Comprehensive Web Development Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side – Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={s2}
            alt="Web Development Illustration"
            className="w-full max-w-md lg:max-w-full object-contain rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
