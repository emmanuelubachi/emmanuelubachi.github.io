"use client";
import Image from "next/image";
import React from "react";
import HeroImg from "/public/eu0.png";
//@ts-ignore
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import IconSlider from "../shared/IconSlider";

const Hero = () => {
  // Create Ref element.
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "a Data Analyst.",
        "a Data Visualization Specialist.",
        "a Web Developer.",
      ], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 0,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 3000,
      showCursor: true,
      autoInsertCss: true,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-[1440px]:mt-8 mt-2">
      {/* <hr className="h-px my-0 bg-gray-200 border-0" /> */}
      <div className="mx-auto sm:mt-52 mt-40 flex flex-col max-w-screen-xl px-4 py-8">
        <div className="m-auto place-self-center align-middle text-center">
          <h1
            className="max-w-2xl mb-2
            text-gray-600
            font-bold tracking-wider leading-none
            text-lg
            min-[400px]:text-xl
            sm:text-2xl
            md:text-2xl
            lg:text-3xl 
            xl:text-4xl"
          >
            Hi, I&apos;m{" "}
            <span
              className="text-transparent bg-clip-text 
              bg-gradient-to-tr from-primary-800 to-pink-500
              text-xl
              min-[400px]:text-2xl
              sm:text-3xl 
              md:text-3xl
              lg:text-4xl 
              xl:text-5xl"
            >
              Emmanuel ubachi
            </span>
            <br />
          </h1>
          <h1
            className="max-w-2xl mb-4 
            text-gray-600
            font-bold tracking-wider leading-none
            text-lg
            min-[400px]:text-xl
            sm:text-2xl
            md:text-2xl
            lg:text-3xl 
            xl:text-4xl"
          >
            <span ref={el} />
          </h1>
          <p
            className="max-w-2xl mb-8
            text-gray-500 
            font-normal 
            text-base leading-7 tracking-tight
            sm:text-lg sm:leading-8"
          >
            I am your gateway to unleashing the potential of your data. Crafting
            captivating data visualizations, immersive dashboards, and
            transformative data platforms.
          </p>
        </div>
      </div>

      {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <div className="mr-auto place-self-center order-last md:order-first md:col-span-7">
          <h1
            className="max-w-2xl mb-2
            text-gray-600
            font-bold tracking-wider leading-none
            text-lg
            min-[400px]:text-xl
            sm:text-2xl
            md:text-2xl
            lg:text-3xl 
            xl:text-4xl"
          >
            Hi, I&apos;m{" "}
            <span
              className="text-transparent bg-clip-text 
              bg-gradient-to-tr from-primary-800 to-pink-500
              text-xl
              min-[400px]:text-2xl
              sm:text-3xl 
              md:text-3xl
              lg:text-4xl 
              xl:text-5xl"
            >
              Emmanuel ubachi
            </span>
            <br />
          </h1>
          <h1
            className="max-w-2xl mb-4 
            text-gray-600
            font-bold tracking-wider leading-none
            text-lg
            min-[400px]:text-xl
            sm:text-2xl
            md:text-2xl
            lg:text-3xl 
            xl:text-4xl"
          >
            <span ref={el} />
          </h1>
          <p
            className="max-w-2xl mb-6
            text-gray-600 
            font-light 
            text-base leading-7 tracking-tight
            sm:text-lg sm:leading-8
            md:text-base md:leading-7 md:tracking-tight
            lg:text-lg
            lg:leading-8 lg:mb-8"
          >
            I am your gateway to unleashing the potential of your data. Crafting
            captivating data visualizations, immersive dashboards, and
            transformative data platforms.
          </p>
        </div>

        <div className="my-8 md:hidden flex flex-col items-center justify-center order-first md:order-last">
          <div className=" max-w-sm flex flex-col items-center">
            <Image
              className="rounded-r-[25px] 
              shadow-[35px_30px_70px_-25px_rgba(0,0,0,0.3)] shadow-blue-200 drop-shadow-2xl"
              src={HeroImg}
              alt="A picture of Emmanuel Ubachi"
              priority={true}
              style={{
                maxWidth: "60%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className=" hidden lg:mt-0 md:flex md:justify-end md:col-span-5">
          <Image
            className="rounded-r-[25px] 
            shadow-[35px_30px_70px_-25px_rgba(0,0,0,0.3)] shadow-blue-200 drop-shadow-2xl
            transition-transform hover:scale-100 cursor-pointer"
            src={HeroImg}
            alt="A picture of Emmanuel Ubachi"
            priority={true}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div> */}

      <div>
        <IconSlider />
      </div>
    </section>
  );
  {
    /* From concept to
            deployment, I&apos;m your partner in leveraging data&apos;s power
            for a competitive edge. Explore the future of data-driven success
            with me. */
  }
  {
    /* <div className="max-w-2xl flex md:order-2">
            <IconSlider />
            <button
              type="button"
              className="text-white 
              bg-primary-900 
              rounded-lg 
              px-5 py-3 
              mr-3 md:mr-0
              font-medium text-sm text-center
              hover:bg-gradient-to-tr hover:from-primary-800 hover:to-pink-700
              transition-transform ease-in-out duration-500 hover:scale-110 cursor-pointer
              focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              BOOK A CALL
            </button>
          </div> */
  }
};

export default Hero;
