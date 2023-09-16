import React from "react";

const ExperienceCard = ({ title, time, desc }: ExperienceProp) => {
  return (
    <div className="mb-10 ml-6">
      <div
        className="relative group border-l-2 border-l-primary-800
      p-8 rounded-e-3xl
      bg-gradient-to-bl from-gray-200 to-white 
      shadow-md shadow-gray-200
      hover:bg-gradient-to-tr hover:from-primary-800 hover:to-pink-500 
      text-gray-600 hover:text-white
      transition ease-in-out
      transform hover:-translate-y-3"
      >
        <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-100 rounded-full -left-3 ring-8 ring-white group-hover:bg-primary-800">
          <svg
            className="w-2.5 h-2.5 text-primary-800 group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 group-hover:text-gray-300">
          {time}
        </time>
        <p className="text-base font-light text-gray-500 group-hover:text-gray-200">
          {desc}
        </p>
      </div>
    </div>
  );
};

ExperienceCard.defaltProp = {
  title: "String",
  time: "Released on December 7th, 2021",
  desc: "",
};

export default ExperienceCard;
