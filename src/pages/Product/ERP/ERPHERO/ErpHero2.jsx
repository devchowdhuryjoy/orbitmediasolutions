import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import erphero2 from "../../../../assets/products/ERPHero2.webp";

const steps = [
  "Business Requirements & Analysis",
  "Workflow Mapping & UI Design",
  "ERP Customisation",
  "System Integration (CRM, POS, HR, Accounting, Banking etc.)",
  "Employee Training & Onboarding",
  "Security Testing, Support & Maintenance",
];

const ErpHero2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section
      className="relative w-full min-h-[75vh] flex items-center"
      style={{
        backgroundImage: `url(${erphero2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-10 text-white">
        <motion.div
          ref={ref}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We Implement ERP Software
          </h2>

          <ul className="space-y-3">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: index * 0.1 }}
                className="text-base md:text-lg"
              >
                {index + 1}️⃣ {step}
              </motion.li>
            ))}
          </ul>

          <p className="mt-6 text-sm md:text-base text-gray-200">
            We provide secure data migration and backup with every implementation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ErpHero2;
