import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = ({ title, desc, iconName }: FeatureCardProps) => {
  return (
    <div
      className="min-[688px]:max-w-sm w-80
      min-[688px]:h-80
      px-8 py-8
      min-[688px]:py-10 min-[688px]:px-10
      xl:p-14
       space-y-4 
      align-middle content-center items-center
      grow border
      border-primary-50
      bg-gradient-to-tr from-blue-800 to-pink-600
      rounded-2xl 
      shadow-[0_10px_60px_10px_rgba(0,0,0,0.2)]
      shadow-gray-100
      transition-transform duration-500 ease-in-out hover:scale-105"
    >
      <FontAwesomeIcon
        className="w-10 h-19 text-white group-hover:text-white"
        icon={iconName}
      />

      <h5
        className="text-xl font-medium tracking-tight
      text-white group-hover:text-white"
      >
        {title}
      </h5>

      <p
        className="font-normal text-base leading-6
        text-white group-hover:text-gray-300"
      >
        {desc}
      </p>
    </div>
  );
};

FeatureCard.defaultProps = {
  title: "What I do",
  desc: "Go to this step by step guideline process on how to certify for your weekly benefits",
  iconName: "",
};

export default FeatureCard;
