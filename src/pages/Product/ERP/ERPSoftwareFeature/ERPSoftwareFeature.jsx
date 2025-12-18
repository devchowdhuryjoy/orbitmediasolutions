import React from "react";
import { FaPaintbrush } from "react-icons/fa6";

const ERPSoftwareFeature = () => {
  const erpData = [
    { id: 1, title: "Financial Management", subtitle: "Financial Management", desc: "Automates accounting tasks like accounts payable and receivable, manages general ledger, budgeting, and financial reporting." },
    { id: 2, title: "Human Resources (HR)", subtitle: "Human Resources (HR)", desc: "Manages employee data, payroll, and other human capital functions." },
    { id: 3, title: "Supply Chain Management", subtitle: "Supply Chain Management", desc: "Oversees the flow of goods and services, from procurement to customer delivery, and includes inventory and warehouse management." },
    { id: 4, title: "Customer Relationship Management (CRM)", subtitle: "Customer Relationship Management (CRM)", desc: "Handles sales, customer service, and tracks customer interactions, orders, and marketing campaign performance." },
    { id: 5, title: "Analytics and Reporting", subtitle: "Analytics and Reporting", desc: "Provides real-time dashboards, data visualization, and reporting tools for insights into performance." },
    { id: 6, title: "Automation", subtitle: "Automation", desc: "Streamlines repetitive tasks, such as data entry and workflow approvals, to increase productivity." },
    { id: 7, title: "Integration", subtitle: "Integration", desc: "Connects with other business systems like e-commerce platforms and third-party applications to create a unified data view." },
    { id: 8, title: "Cloud Deployment", subtitle: "Cloud Deployment", desc: "Offers benefits like scalability, lower IT costs, and easier updates." },
    { id: 9, title: "Security and Compliance", subtitle: "Security and Compliance", desc: "Includes tools for data security, user access control, and managing regulatory compliance." },
    { id: 10, title: "Mobile Accessibility", subtitle: "Mobile Accessibility", desc: "Allows employees to access critical data and perform tasks on the go." },
    { id: 11, title: "Manufacturing and Production Management", subtitle: "Manufacturing and Production Management", desc: "Manages production schedules, quality control, and traceability for manufacturing businesses." },
  ];

  const folderClipPath = "polygon(0 0, 45% 0, 52% 12%, 100% 12%, 100% 100%, 0 100%)";

  return (
    <div className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-16">
          ERP Software Services UK Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {erpData.map((erp) => (
            <div
              key={erp.id}
              className="relative p-px group transition-transform duration-300 hover:-translate-y-2 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #6a48f2 0%, #ec4899 100%)",
                clipPath: folderClipPath,
              }}
            >
              <div
                className="bg-white p-8 h-full flex flex-col items-start text-left rounded-xl"
                style={{
                  clipPath: folderClipPath,
                  paddingTop: "3rem"
                }}
              >
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-3xl"><FaPaintbrush /></span>
                </div>

                <h2 className="text-black text-2xl font-bold mb-2">
                  {erp.id}. {erp.title}
                </h2>

                <h3 className="text-gray-500 font-semibold mb-4 text-xs uppercase tracking-[1px]">
                  {erp.subtitle}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {erp.desc}
                </p>

                <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
                   <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,20 Q50,5 100,20" stroke="white" strokeWidth="0.2" fill="none" />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPSoftwareFeature;
