import React from "react";
import ExperienceCard from "../cards/ExperienceCard";

const Resume = () => {
  const experienceList = [
    {
      id: 1,
      title: "Data Analyst Freelance",
      url: "https://chinaglobalsouth.com/",
      time: "May 2023",
      desc: "China Global South Project - USA",
      isLink: true,
    },
    {
      id: 2,
      title: "Data Scientist",
      url: "https://www.tradeeconomics.com/",
      time: "April 2021 - April 2023",
      desc: "International Economics Consulting - Mauritius",
      isLink: true,
    },
    {
      id: 3,
      title: "Business Intelligence Developer",
      url: "https://naveo.mu/home",
      time: "August 2020 - March 2021",
      desc: "Navigation and Geocoding Technologies - Mauritius",
      isLink: true,
    },
    {
      id: 4,
      title: "Volunteer",
      url: "/",
      time: "Jan 2017 - March 2019",
      desc: "SamFav International School - Nigeria",
      isLink: false,
    },
    {
      id: 5,
      title: "Computer Technician",
      url: "/",
      time: "Jan 2016",
      desc: "FranceMan Ltd - Nigeria",
      isLink: false,
    },
  ];

  return (
    <section id="resume" className="pt-12">
      <div className="max-w-screen-xl m-auto px-4 py-8 lg:px-6 sm:py-16 lg:py-24">
        {/* Resume Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl">
          Experience
          </h2>
          <p
            className="mt-4 font-normal
            text-base
            sm:text-lg
          text-gray-500"
          >
            {/* Crafted with skill and care to help our clients grow their business! */}
            Explore My Journey and Expertise!
          </p>
        </div>
        {/* Experience */}
        <div className="mb-8">
          <div>
            <div className=" md:grid grid-flow-row grid-cols-2">
              {experienceList.map((item) => (
                <ExperienceCard
                  key={item.id}
                  title={item.title}
                  url={item.url}
                  time={item.time}
                  desc={item.desc}
                  isLink={item.isLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
