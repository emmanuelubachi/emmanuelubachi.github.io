import Image from "next/image";
import React from "react";
import HeroImg from "/public/eu1.png";
import ProjectA from "../cards/ProjectA";
import ProjectB from "../cards/ProjectB";
import { title } from "process";
import Proj1 from "/public/interactiveMap.jpeg";
import Proj2 from "/public/tradeFlow.jpeg";

const Projects = () => {
  const projectList = [
    {
      title1: "Uncover Impactful Insights",
      desc: "Utilizing statistical modeling and data mining techniques to uncover trends, patterns and actionable insights from complex data",
      imgSrc: "string",
      imgAlt: "string",
      projUrl: "string",
    },

    {
      title: "Building Intuitive Interfaces",
      desc: "Developing responsive, user-friendly web applications and dashboards that bring data to life for users and stakeholders.",
      imgSrc: "string",
      imgAlt: "string",
      projUrl: "string",
    },

    {
      title: "Telling Compelling Stories",
      desc: "Creating interactive data visualizations that intuitively communicate key information and insights to diverse audiences.",
      imgSrc: "string",
      imgAlt: "string",
      projUrl: "string",
    },
  ];

  return (
    <section id="projects" className="pt-12">
      {/* <hr className="h-px max-w-screen-xl mx-auto bg-gray-200 border-0" /> */}
      <div className="max-w-screen-xl m-auto px-4 py-8 lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl">
            Projects
          </h2>
          <p
            className="mt-4 font-normal
            text-base
            sm:text-lg
          text-gray-500"
          >
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>
        <div className="space-y-12 sm:space-y-16">
          {/* <ProjectA
            title="string"
            desc="string"
            imgSrc={}
            imgAlt="string"
            projUrl="string"
          /> */}
          <ProjectB
            title="Trade Flow Dashboard of Copper & Cobalt Production in the DR Congo"
            desc="Developed interactive dashboards using Power BI to visualise Copper & Cobalt production in DR Congo by analysing complex datasets using Python (Pandas). Developed customised data models and advanced visualisations that delivered actionable insights, empowering stakeholders with valuable resources for data-driven decisions regarding mining sector complexities."
            imgSrc={Proj2}
            imgAlt="Trade Flow Dashboard of Copper & Cobalt Production in the DR Congo Project Image"
            projUrl="https://chinaglobalsouth.com/cobaltmap/en/production-flow.html"
          />
          <ProjectA
            title="Interactive Map of Copper & Cobalt Production in the DR Congo"
            desc="Designed interactive map showcasing Copper & Cobalt production in DR Congo by building crafting visualisations leveraging mining registry data and on-ground research; delivered insights to industry stakeholders in an easy-to-understand and visually compelling format."
            imgSrc={Proj1}
            imgAlt="Interactive Map of Copper & Cobalt Production in the DR Congo Project Image"
            projUrl="https://chinaglobalsouth.com/cobaltmap/en/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
