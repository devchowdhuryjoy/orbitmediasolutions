import React from "react";

const stats = [
  { value: "50+", label: "Team Members" },
  { value: "15+", label: "Countries" },
  { value: "100+", label: "Clients Worldwide" },
];

const CareerStats = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <h2 className="text-3xl font-bold text-primary">{stat.value}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerStats;
