import React from "react";

const benefits = [
  {
    title: "Innovative Projects",
    desc: "Work on cutting-edge technology and challenging projects that make a real impact.",
  },
  {
    title: "Great Culture",
    desc: "Collaborative environment that values diversity, creativity, and work-life balance.",
  },
  {
    title: "Career Growth",
    desc: "Continuous learning opportunities and clear paths for professional advancement.",
  },
];

const CareerBenefits = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-2xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerBenefits;
