import React from "react";
import erpsoft from "../../../../assets/products/e3.jpg";

const ERPSOFTWARESERVICE = () => {
  const modules = [
    {
      module: "Finance & Accounting",
      features:
        "Billing, UK tax compliance, budgeting, reporting, automation",
    },
    {
      module: "HR & Payroll",
      features:
        "Automated payroll, attendance, onboarding, performance tracking",
    },
    {
      module: "Inventory & Warehouse",
      features:
        "Stock control, barcode, multi-location management, forecasting",
    },
    {
      module: "Supply Chain Management",
      features:
        "Vendor sourcing, order tracking, procurement automation",
    },
    {
      module: "CRM & Sales ERP",
      features:
        "Lead management, sales automation, pipeline tracking",
    },
    {
      module: "Manufacturing ERP",
      features:
        "BOM, production planning, cost control, quality management",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={erpsoft}
            alt="ERP software services"
            className="w-full max-w-md lg:max-w-lg rounded-sm shadow-xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our ERP Software Services
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We offer end-to-end ERP development, implementation,
            customisation, migration, and ongoing support for
            UK-based businesses.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            ERP Modules We Provide
          </h3>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
            <table className="min-w-full border-collapse">
              <thead className="text-black">
                <tr className="hover:bg-indigo-50 transition-colors">
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    ERP Module
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Features
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {modules.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-indigo-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.module}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item.features}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ERPSOFTWARESERVICE;
