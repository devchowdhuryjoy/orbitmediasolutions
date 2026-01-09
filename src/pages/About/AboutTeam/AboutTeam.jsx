import React, { useEffect, useState } from "react";

const AboutTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://theorbit.one/api/about")
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setTeamData(data.data.teams || []);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Team API Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading team...</p>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-5xl text-center">Meet Our Team</h2>
      <p className="text-xs text-center p-4 text-black">
        The talented people behind Orbit
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamData.map((team) => (
          <div
            key={team.id}
            className="card bg-base-100 w-full shadow-md border border-gray-200 p-4
                       transform transition-transform duration-500 ease-in-out
                       hover:scale-105"
          >
            <figure className="flex justify-center">
              <img
                src={`https://theorbit.one/${team.image}`}
                alt={team.name}
                className="rounded-full w-36 h-36 object-cover border-4 border-indigo-400"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="text-lg font-bold mt-4 whitespace-nowrap">
                {team.name}
              </h2>
              <p className="text-gray-600">{team.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
