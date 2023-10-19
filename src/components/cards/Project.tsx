"use client";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";

import { Badge } from "@/components/ui/badge";

const Project = (props: ProjectCardProps) => {
  const { title, desc, imgSrc, imgAlt, projUrl, badge, inverse, isLink } =
    props;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.45 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      {isLink ? (
        <Link href={projUrl} target="_blank">
          {inverse ? (
            <div
              className="border-1 px-6 py-8
            border-gray-50
            bg-gradient-to-r from-gray-200 to-white
            rounded-xl 
            shadow-[0_10px_60px_10px_rgba(0,0,0,0.2)]
            shadow-gray-100
            transform hover:skew-x-2 hover:shadow-2xl hover:shadow-gray-400"
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
                    className="font-normal text-gray-700 
              text-xs lg:text-sm"
                  >
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {Array.isArray(badge) ? (
                      badge.map((item) => (
                        <Badge key={item.label}>{item.label}</Badge>
                      ))
                    ) : (
                      <Badge key={badge.label}>{badge.label}</Badge>
                    )}
                  </div>
                </div>
                <Image
                  className="w-full p-1 order-first md:order-last rounded-xl "
                  src={imgSrc}
                  alt={imgAlt}
                  priority
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ) : (
            <div
              className="border-1 px-6 py-8
          border-gray-50
          bg-gradient-to-r from-gray-200 to-white
          rounded-xl 
          shadow-[0_10px_60px_10px_rgba(0,0,0,0.2)]
          shadow-gray-100
          transform hover:skew-x-2 hover:shadow-2xl hover:shadow-gray-400"
            >
              <div
                className="gap-8 items-center
              mx-auto 
              max-w-screen-xl
              md:grid md:grid-cols-2
              xl:gap-16"
              >
                <Image
                  className="w-full p-1 rounded-xl"
                  src={imgSrc}
                  alt={imgAlt}
                  priority
                  width={500}
                  height={500}
                />

                <div className="mt-4 md:mt-0">
                  <h3
                    className="mb-2 text-gray-700
                tracking-tight 
                font-semibold
                text-lg
                lg:text-xl"
                  >
                    {title}
                  </h3>
                  <p className="mb-6 font-normal text-gray-700 text-xs lg:text-sm">
                    {desc}
                  </p>
                  <div className="flex flex-wrap flex-1 gap-2 mt-3">
                    {Array.isArray(badge) ? (
                      badge.map((item) => (
                        <Badge key={item.label}>{item.label}</Badge>
                      ))
                    ) : (
                      <Badge key={badge.label}>{badge.label}</Badge>
                    )}
                  </div>
                  {/* <LinkButton url={projUrl} /> */}
                </div>
              </div>
            </div>
          )}
        </Link>
      ) : (
        <>
          {inverse ? (
            <div
              className="border-1 px-6 py-8
              border-gray-50
              bg-gradient-to-r from-gray-200 to-white
              rounded-xl 
              shadow-[0_10px_60px_10px_rgba(0,0,0,0.2)]
              shadow-gray-100
              transform hover:skew-x-2 hover:shadow-2xl hover:shadow-gray-400"
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
                    className="font-normal text-gray-700 
                text-xs lg:text-sm"
                  >
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {Array.isArray(badge) ? (
                      badge.map((item) => (
                        <Badge key={item.label}>{item.label}</Badge>
                      ))
                    ) : (
                      <Badge key={badge.label}>{badge.label}</Badge>
                    )}
                  </div>
                </div>
                <Image
                  className="w-full p-1 order-first md:order-last rounded-xl "
                  src={imgSrc}
                  alt={imgAlt}
                  priority
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ) : (
            <div
              className="border-1 px-6 py-8
            border-gray-50
            bg-gradient-to-r from-gray-200 to-white
            rounded-xl 
            shadow-[0_10px_60px_10px_rgba(0,0,0,0.2)]
            shadow-gray-100
            transform hover:skew-x-2 hover:shadow-2xl hover:shadow-gray-400"
            >
              <div
                className="gap-8 items-center
                mx-auto 
                max-w-screen-xl
                md:grid md:grid-cols-2
                xl:gap-16"
              >
                <Image
                  className="w-full p-1 rounded-xl"
                  src={imgSrc}
                  alt={imgAlt}
                  priority
                  width={500}
                  height={500}
                />

                <div className="mt-4 md:mt-0">
                  <h3
                    className="mb-2 text-gray-700
                  tracking-tight 
                  font-semibold
                  text-lg
                  lg:text-xl"
                  >
                    {title}
                  </h3>
                  <p className="mb-6 font-normal text-gray-700 text-xs lg:text-sm">
                    {desc}
                  </p>
                  <div className="flex flex-wrap flex-1 gap-2 mt-3">
                    {Array.isArray(badge) ? (
                      badge.map((item) => (
                        <Badge key={item.label}>{item.label}</Badge>
                      ))
                    ) : (
                      <Badge key={badge.label}>{badge.label}</Badge>
                    )}
                  </div>
                  {/* <LinkButton url={projUrl} /> */}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Project;
