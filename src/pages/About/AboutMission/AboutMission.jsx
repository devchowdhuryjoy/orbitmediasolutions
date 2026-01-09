import React, { useEffect, useState } from "react";

const AboutMission = () => {
  const [missionData, setMissionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://theorbit.one/api/about")
      .then((res) => res.json())
      .then((data) => {
        // API থেকে আসা JSON structure অনুসারে
        const about = data.data.about;

        const formattedData = [
          {
            id: 1,
            title: about.mission_title,
            description: about.mission_description,
          },
          {
            id: 2,
            title: about.vision_title,
            description: about.vision_description,
          },
          {
            id: 3,
            title: about.values_title,
            description: about.values_description,
          },
        ];

        setMissionData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
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
            <p
              className="text-justify text-sm leading-relaxed text-gray-700
                         border border-gray-200 rounded-md p-4 mt-2
                         bg-base-200/30 shadow-sm"
            >
              {item.description || "No data available"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMission;
