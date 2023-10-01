import React from "react";
import Image from "next/image";
import Background from "/public/p1.png";
import Link from "next/link";

const FeedingThePacific = () => {
  const cards = [
    {
      id: 1,
      name: "Github Code",
      url: "https://github.com/emmanuelubachi/feeding-the-pacific",
    },
    {
      id: 2,
      name: "Data Analysis",
      url: "https://github.com/emmanuelubachi/feeding-the-pacific-analysis",
    },
  ];

  return (
    <header>
      <div className=" -z-[1] fixed w-screen h-screen">
        <Image
          alt="Fancy Background Image"
          src={Background}
          placeholder="blur"
          quality={100}
          priority={true}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <section className="m-0 h-[80vh] flex items-center justify-center">
        <div className="m-4 flex flex-col items-center justify-center sm:space-y-10 space-y-2 w-fit bg-pri-12/90 p-4 rounded-xl">
          <div>
            <h1
              className="
                text-3xl sm:text-4xl mb-2
                font-extrabold leading-none tracking-tight 
                text-stone-700"
            >
              Pacific Food Trade
            </h1>
            <p
              className="max-w-xl
              text-gray-600 font-medium 
              text-xs leading-5 tracking-tight
              sm:text-sm sm:leading-6"
            >
              Welcome to <span className=" font-bold">Pacific Food Trade</span>,
              our entry for the PACIFIC DATAVIZ CHALLENGE. Explore this
              interactive platform to unlock insights into the intricate world
              of food trade in the Pacific region. Unveil the origins, dynamics,
              and trends shaping our food landscape.
            </p>
          </div>

          <div className="space-y-3">
            <div className=" flex justify-center">
              <Link
                href="https://pacific-food-trade.onrender.com"
                className="inline-flex items-center px-14 py-2.5
                  text-md font-medium text-center text-white 
                  bg-pri-13/90 rounded-lg transition-transform ease-in-out duration-300
                  hover:bg-gradient-to-tr from-pri-1 to-pri-13
                  hover:bg-pri-13 hover:scale-105 focus:ring-1 focus:outline-none focus:ring-white/60"
              >
                Get Started!!
              </Link>
            </div>
            <div className="flex gap-3">
              {cards.map((i) => (
                <Link
                  key={i.id}
                  href={i.url}
                  target="_blank"
                  className="inline-flex items-center sm:px-6 px-4 py-2.5
                    text-sm font-medium text-center text-white 
                    bg-pri-1/70 rounded-lg 
                    hover:bg-pri-1 focus:ring-1 focus:outline-none focus:ring-white/60"
                >
                  <h5 className="font-light pr-2">{i.name}</h5>

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default FeedingThePacific;
