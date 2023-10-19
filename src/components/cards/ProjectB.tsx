import Image from "next/image";
import React from "react";

import { Badge } from "@/components/ui/badge";

import LinkButton from "../shared/LinkButton";

const ProjectB = ({
  title,
  desc,
  imgSrc,
  imgAlt,
  projUrl,
  badge,
}: ProjectCardProps) => {
  return (
    <div
      className="border-1 px-4 py-8
    border-gray-50
      bg-gradient-to-r from-gray-200 to-white
      rounded-2xl 
      shadow-[0_10px_60px_10px_rgba(0,0,0,0.2)]
      shadow-gray-100"
    >
      <div
        className="gap-2 items-center
        mx-auto
        max-w-screen-xl
        grid md:grid-cols-2
        xl:gap-16"
      >
        <div className="order-last md:order-first">
          <h3
            className="mb-2 text-gray-700
            tracking-tight
            font-semibold
            text-lg
            lg:text-xl"
          >
            {title}
          </h3>
          <p
            className="font-normal text-gray-600 
            text-xs lg:text-sm"
          >
            {desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {Array.isArray(badge) ? (
              badge.map((item) => <Badge key={item.label}>{item.label}</Badge>)
            ) : (
              <Badge key={badge.label}>{badge.label}</Badge>
            )}
          </div>
          {/* <LinkButton url={projUrl} /> */}
        </div>
        <Image
          className="w-full p-1 order-first md:order-last rounded-xl"
          src={imgSrc}
          alt={imgAlt}
          priority
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ProjectB;
