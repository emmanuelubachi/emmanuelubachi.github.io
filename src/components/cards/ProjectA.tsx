import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectA = ({
  title,
  desc,
  imgSrc,
  imgAlt,
  projUrl,
}: ProjectCardProps) => {
  return (
    <div className="sm:mb-4">
      <div
        className="gap-8 items-center
        mx-auto 
        max-w-screen-xl
        md:grid md:grid-cols-2
        xl:gap-16"
      >
        <Image
          className="w-full p-1 rounded-lg"
          src={imgSrc}
          alt={imgAlt}
          width={500}
          height={400}
        />

        <div className="mt-4 md:mt-0">
          <h3
            className="mb-4 text-gray-600
          tracking-tight 
          font-semibold
          text-xl
          sm:text-2xl
          md:text-2xl
          lg:text-3xl"
          >
            {title}
          </h3>
          <p
            className="mb-6 font-light text-gray-500 
          lg:text-lg"
          >
            {desc}
          </p>
          <Link
            href={projUrl}
            target="_blank"
            className="inline-flex items-center text-white 
            bg-primary-900 
            hover:bg-gradient-to-tr hover:from-primary-800 hover:to-pink-700
            transition-transform hover:scale-110 cursor-pointer
            focus:ring-4 focus:ring-primary-300 font-medium 
            rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View case study
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectA.deafaltProps = {
  title: "Building Intuitive Interfaces",
  desc: "Developing responsive, user-friendly web applications and dashboards that bring data to life for users and stakeholders.",
  imgSrc: "string",
  imgAlt: "string",
  projUrl: "string",
};

export default ProjectA;
