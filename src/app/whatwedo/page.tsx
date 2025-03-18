import React from "react";
import { FaGraduationCap, FaHospital, FaTint, FaBullhorn, FaBriefcase } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className="pb-8 px-4 pt-14">
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-4">
        <h1 className="text-4xl font-bold text-center text-[#0b0a46] mb-10">
          What We Do
        </h1>
        <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
          At SSLF Charity Trust, we are dedicated to creating a positive impact in
          society through various social welfare initiatives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:bg-gray-100 transform hover:-translate-y-2 text-center"
            >
              <div className="flex items-center justify-center text-5xl text-[#0b0a46] mb-4 transition duration-300 hover:text-blue-600">
                {item.icon}
              </div>
              <h2 className="text-2xl font-semibold text-[#0b0a46] mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-700 font-semibold text-lg">
            Through these initiatives, SSLF Charity Trust is committed to building
            a compassionate, educated, and self-sufficient society.
          </p>
          <p className="text-gray-600 mt-4 text-lg">
            Join us in our mission to uplift communities and create a better
            tomorrow!
          </p>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    icon: <FaGraduationCap />, 
    title: "Scholarships for Education",
    description:
      "We offer financial assistance to deserving students, ensuring that no one is deprived of education due to financial constraints.",
  },
  {
    icon: <FaHospital />, 
    title: "Medical Camps & Healthcare Support",
    description:
      "Our free medical camps provide essential healthcare services to underprivileged communities, promoting better health and well-being.",
  },
  {
    icon: <FaTint />, 
    title: "Blood Donation Drives",
    description:
      "We organize regular blood donation camps to ensure a steady supply of life-saving blood for those in need.",
  },
  {
    icon: <FaBullhorn />, 
    title: "Awareness Programs",
    description:
      "We conduct awareness campaigns on health, hygiene, education, and social issues to empower communities with knowledge and resources.",
  },
  {
    icon: <FaBriefcase />, 
    title: "Training & Skill Development",
    description:
      "Our vocational and skill development programs help individuals gain employment opportunities and achieve financial independence.",
  },
];

export default WhatWeDo;
