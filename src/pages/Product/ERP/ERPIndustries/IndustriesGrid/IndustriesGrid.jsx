import React from 'react'

const IndustriesGrid = () => {
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
  return (
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
  )
}

export default IndustriesGrid