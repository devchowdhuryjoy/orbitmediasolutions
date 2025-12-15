import React from "react";
import sir from "../../../assets/images/Team/ceo_sir.png"
import mam from "../../../assets/images/Team/mam.png"
import IftyVai from "../../../assets/images/Team/IftyAhamed.jpg"
import ImranUddinVai from "../../../assets/images/Team/ImranUddinChowdhury.jpg"
import AbbdullahVai from "../../../assets/images/Team/AbbdullahAlSamad.jpg"

const AboutTeam = () => {
    const teamData = [
  {
    id: 1,
    name: "Shamsul Alam",
    position: "CEO",
    image: sir
  },
  {
    id: 2,
    name: "Zohura Zannat",
    position: "Manager",
    image: mam
  },
  {
    id: 3,
    name: "Ifty Ahamed",
    position: "Digital Marketing Executive",
    image: IftyVai
  },
  {
    id: 4,
    name: "Abdullah Al Samad",
    position: "Web Developer",
    image: AbbdullahVai
  },
  {
    id: 5,
    name: "Imran Uddin Chowdhury",
    position: "Web Developer",
    image: ImranUddinVai
  }
];
  return (
    <>
    <div className="mt-10">
      <h2 className="text-5xl text-center">Meet Our Team</h2>
      <p className="text-xs text-center p-4 text-gray-500">
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
                src={team.image}
                alt={team.name}
                className="rounded-full w-36 h-36 object-cover border-4 border-indigo-400"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-lg font-bold mt-4 whitespace-nowrap">{team.name}</h2>
              <p className="text-gray-600">{team.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AboutTeam;
