import React from "react";

const AboutMission = () => {
  const missionData = [
    {
      id: 1,
      title: "Mission",
      description:
        "At Orbit Media Solutions, our mission is to empower organizations through innovative, reliable, and results-driven digital solutions that accelerate business transformation and growth. Since our founding in 2018, we have been committed to delivering excellence by combining cutting-edge technology, strategic insight, and creative expertise. We aim to bridge the gap between business objectives and digital innovation — helping startups, SMEs, and enterprises harness the power of technology to improve efficiency, strengthen their digital presence, and unlock new opportunities for success. Our mission extends beyond delivering projects; we focus on creating measurable value, building long-term partnerships, and driving sustainable growth for our clients in an ever-evolving global marketplace.",
    },
    {
      id: 2,
      title: "Vision",
      description:
        "Our vision is to be a global leader in digital innovation — redefining how businesses leverage technology to achieve sustainable growth and competitive advantage. We aspire to create a world where every organization, regardless of size or industry, can access intelligent, scalable, and future-ready digital solutions that drive real transformation. We envision building a lasting legacy of trust, excellence, and innovation by continuously evolving with emerging technologies and industry trends. Through a culture of creativity, collaboration, and integrity, we aim to inspire digital progress, empower businesses to realize their full potential, and shape the future of the digital landscape. Our ultimate goal is to position Orbit Media Solutions as a trusted global partner — where vision meets technology, and ideas evolve into impactful realities.",
    },
    {
      id: 3,
      title: "Values",
      description:
        "At Orbit Media Solutions, our values form the foundation of who we are and how we operate. We are driven by innovation, constantly embracing new technologies and creative thinking to deliver transformative digital solutions. Our commitment to excellence ensures that every project meets the highest standards of quality and performance. We uphold integrity in all our relationships, fostering trust through honesty, transparency, and accountability. Through collaboration, we work closely with clients and partners to achieve shared success, while our focus on client success ensures that every solution we create delivers measurable value and growth. Finally, we believe in continuous growth, nurturing our team’s development and evolving with the ever-changing digital landscape to remain a trusted global partner in digital innovation.",
    },
  ];
  return (
    <>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {missionData.map((item) => (
        <div
          key={item.id}
          className="card bg-base-100 h-full p-4
                     transform transition-transform duration-500 ease-in-out
                     hover:scale-105"
        >
          <div className="card-body p-0">
            <h2 className="text-center text-lg font-bold mb-2">
              {item.title}
            </h2>
            <p className="text-justify text-sm leading-relaxed text-gray-700
                          border border-gray-200 rounded-md p-4 mt-2
                          bg-base-200/30 shadow-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default AboutMission;
