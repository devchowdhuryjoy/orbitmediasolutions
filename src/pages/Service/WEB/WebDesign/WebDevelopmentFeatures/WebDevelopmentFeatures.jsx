import React from "react";
import {
  FaMobileAlt,
  FaCompass,
  FaRocket,
  FaSearch,
  FaCogs,
  FaPalette,
  FaShoppingCart,
  FaLock,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "In an era where mobile usage surpasses desktop, responsive design is non-negotiable. We ensure your website looks and functions flawlessly across all devices and screen sizes.",
  },
  {
    icon: <FaCompass />,
    title: "User-friendly Navigation",
    description:
      "We design intuitive navigation structures and clear pathways so users can quickly find the information they need, enhancing usability and engagement.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Loading Speeds",
    description:
      "Optimized performance ensures fast loading times, reducing bounce rates and delivering a smooth, frustration-free user experience.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Integration",
    description:
      "SEO best practices are integrated into development, including optimized metadata, content structure, and performance for higher search visibility.",
  },
  {
    icon: <FaCogs />,
    title: "Content Management System (CMS)",
    description:
      "We provide robust, user-friendly CMS solutions that allow you to manage and update website content easily without technical expertise.",
  },
  {
    icon: <FaPalette />,
    title: "Customizable Design",
    description:
      "Your website is tailored to reflect your brand identity with customizable layouts, colors, and visuals that align with your business values.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce Functionality",
    description:
      "Secure and scalable e-commerce solutions that support smooth transactions, intuitive browsing, and an excellent shopping experience.",
  },
  {
    icon: <FaLock />,
    title: "Security Features",
    description:
      "Enterprise-grade security including SSL encryption, regular updates, and firewall protection to safeguard your website and user data.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Reporting",
    description:
      "Integrated analytics tools help track traffic, conversions, and engagement, enabling data-driven decisions and continuous optimization.",
  },
];

const WebDevelopmentFeatures = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Web Design & Development Solutions Features
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Powerful, scalable, and user-centric web solutions designed to drive
          performance, engagement, and business growth.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-xl">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDevelopmentFeatures;
