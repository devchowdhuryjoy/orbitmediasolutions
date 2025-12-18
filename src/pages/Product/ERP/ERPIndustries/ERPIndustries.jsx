import React from "react";

const industries = [
  {
    title: "Manufacturing & Engineering",
    desc: "Streamline production processes and optimize inventory management. Enhance operational efficiency across all units. Reduce downtime and improve resource utilization.",
  },
  {
    title: "Retail & E-commerce",
    desc: "Manage sales, stock, and online platforms seamlessly. Improve customer experience and speed up order fulfillment. Track orders and inventory in real-time for better decision making.",
  },
  {
    title: "Logistics & Supply Chain",
    desc: "Optimize shipping, tracking, and supply management. Reduce delays and increase operational transparency. Enhance coordination between suppliers, warehouses, and customers.",
  },
  {
    title: "Construction & Real Estate",
    desc: "Track projects, contracts, and resources effectively. Ensure timely completion and maintain cost control. Improve collaboration between teams and stakeholders.",
  },
  {
    title: "Pharmaceuticals & Healthcare",
    desc: "Maintain regulatory compliance while managing patient or product data efficiently. Streamline operations and reduce administrative workload. Enhance accuracy and reliability in critical processes.",
  },
  {
    title: "Food & Beverage",
    desc: "Control inventory, manage production, and ensure quality assurance. Ensure timely delivery and consistent product quality. Improve operational efficiency across supply chain and kitchens.",
  },
  {
    title: "Education & Training Institutions",
    desc: "Automate student records, scheduling, and reporting. Streamline administrative processes for teachers and staff. Enhance management of courses, exams, and student progress.",
  },
  {
    title: "Technology & Software Companies",
    desc: "Organize projects, resources, and client management efficiently. Improve team collaboration and productivity. Enable smooth project tracking and reporting in real-time.",
  },
  {
    title: "Service & Consultancy Firms",
    desc: "Optimize client interactions, billing, and project workflows. Deliver faster, reliable, and scalable services. Improve internal efficiency and customer satisfaction.",
  },
];

const ERPIndustries = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Industries We Serve Across the UK
          </h2>
          <p className="mt-4 text-gray-600">
            Our ERP system is custom-tailored to meet the unique operational
            needs of businesses across multiple industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Benefits of Orbit’s ERP Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Orbit’s ERP solutions help businesses reduce operational costs by
              up to <span className="font-semibold">40%</span> while boosting
              workforce productivity and efficiency. Our system enables full
              automation of business operations, provides real-time analytics
              for smarter decision-making, and ensures high-level security with
              reliable cloud backup support.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Fully customised to comply with UK business regulations, Orbit ERP
              seamlessly integrates with CRM, POS, HR, Accounting, and
              E-commerce platforms.
            </p>
          </div>

          {/* Why Choose */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Orbit Media Solutions
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Fully customisable ERP modules for UK businesses</li>
              <li>• Affordable subscription and development costs</li>
              <li>• Fast implementation with training and onboarding</li>
              <li>• Dedicated remote and on-site support</li>
              <li>• Scalable solutions for startups to enterprises</li>
              <li>• ERP systems designed around your business needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPIndustries;
