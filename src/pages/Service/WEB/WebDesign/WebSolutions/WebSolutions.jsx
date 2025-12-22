import React from "react";
import { FaBolt, FaShieldAlt, FaExpandArrowsAlt, FaIndustry } from "react-icons/fa";

const webSolutions = [
  {
    title: "Dynamic Websites",
    description:
      "We create responsive, visually compelling websites with scalable architectures that ensure smooth navigation, fast loading times, and effortless interaction on any device. Designed with both users and search engines in mind, our dynamic websites help drive engagement, capture leads, and strengthen your brand presence online.",
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Our mobile-first e-commerce solutions are built for security, speed, and scalability. Each online store is optimized for SEO, intuitive browsing, and seamless checkout experiences, helping businesses maximize sales, improve user retention, and expand into new markets with confidence.",
  },
  {
    title: "Web Applications",
    description:
      "We develop progressive web applications (PWAs) that deliver interactive, app-like experiences across all devices and platforms. With a focus on performance, offline capabilities, and real-time functionality, our web applications enhance user engagement while providing robust, enterprise-level functionality.",
  },
  {
    title: "Custom CMS",
    description:
      "Our tailor-made content management systems empower businesses to manage content efficiently, securely, and with minimal effort. With intuitive dashboards, automated workflows, and personalized features, our custom CMS solutions accelerate time-to-market, streamline operations, and give teams the tools they need to adapt quickly in a fast-paced digital environment.",
  },
];

const whyChoose = [
  {
    icon: <FaBolt className="text-blue-600 w-6 h-6" />,
    title: "Optimised Performance",
    description:
      "We build lightning-fast websites using efficient, clean coding practices and modern frameworks, ensuring your digital platforms load quickly, respond seamlessly, and provide smooth navigation on every device. Fast, reliable performance enhances user experience and boosts SEO and conversion rates.",
  },
  {
    icon: <FaShieldAlt className="text-green-600 w-6 h-6" />,
    title: "Robust Security",
    description:
      "Your digital assets are protected with enterprise-level security measures, including data encryption, secure authentication, and continuous monitoring. We proactively defend against vulnerabilities, ensuring your website or application is resilient against cyber threats and compliant with industry standards.",
  },
  {
    icon: <FaExpandArrowsAlt className="text-purple-600 w-6 h-6" />,
    title: "Scalable Architecture",
    description:
      "Our web solutions are designed to grow with your business, accommodating increased traffic, additional features, and evolving workflows without compromising performance. From start-ups to enterprise-level operations, our flexible architecture ensures your platform remains future-proof and adaptable.",
  },
  {
    icon: <FaIndustry className="text-yellow-600 w-6 h-6" />,
    title: "Industry Expertise",
    description:
      "With experience across a wide range of sectors—including eCommerce, FinTech, Healthcare, Education, Real Estate, Travel & Tourism, and more—we understand the unique challenges and compliance requirements of each industry. This allows us to deliver tailored solutions that meet your business objectives and provide measurable results.",
  },
];

const WebSolutions = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Web Solutions for UK Businesses</h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          We provide a complete range of web solutions that help your business thrive online.
        </p>
      </div>

      {/* Web Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
        {webSolutions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose Orbit Media Solutions?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {whyChoose.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4 bg-white rounded-2xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="shrink-0">{item.icon}</div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebSolutions;
