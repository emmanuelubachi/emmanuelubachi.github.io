"use client";
import React from "react";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Link from "next/link";

const Navbar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  const navList = [
    {
      id: 1,
      name: "Home",
      url: "#",
    },
    {
      id: 2,
      name: "What I Do",
      url: "#features",
    },
    {
      id: 3,
      name: "Projects",
      url: "#projects",
    },
    {
      id: 4,
      name: "Experience",
      url: "#resume",
    },
    // {
    //   id: 5,
    //   name: "Contact",
    //   url: "#contact",
    // },
  ];

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-white border-b border-primary-50 shadow-lg shadow-primary-50">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://ubachi.com/" className="flex items-center">
          <span className="text-gray-600 self-center text-2xl lg:text-3xl font-semibold whitespace-nowrap">
            uba
          </span>
          <span
            className="self-center 
            text-2xl 
            lg:text-3xl
            font-semibold 
            whitespace-nowrap 
            text-transparent bg-clip-text 
            bg-gradient-to-tr from-primary-800 to-pink-500"
          >
            Chi
          </span>
        </a>
        <div className="flex md:order-2">
          {/* <button
            type="button"
            className="text-white 
            bg-primary-900 
            rounded-lg 
            px-3 py-1 sm:px-5 sm:py-3
            mr-3 md:mr-0
            font-medium 
            text-xs sm:text-sm text-center
            hover:bg-gradient-to-tr hover:from-primary-800 hover:to-pink-700
            transition-transform ease-in-out duration-500 hover:scale-110 cursor-pointer
            focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            BOOK A CALL
          </button> */}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2
            sm:w-10 sm:h-10
            justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border 
          border-gray-100 rounded-lg bg-gray-50 md:flex-row 
          md:space-x-8 md:mt-0 md:border-0 md:bg-white"
          >
            {navList.map((items) => (
              <li key={items.id}>
                <Link
                  href={items.url}
                  className="block py-2 pl-3 pr-4 
                  font-light text-gray-500 
                  text-sm uppercase
                  rounded 
                  hover:bg-gray-100 
                  md:hover:bg-transparent
                  md:hover:-translate-y- md:hover:scale-110 ease-in-out duration-200 hover:font-medium
                  md:hover:text-primary-700 
                
                  md:p-0"
                  aria-current="page"
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
