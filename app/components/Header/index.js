"use client";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import headersData from "../../data/headersData";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="w-9/10 sm:w-17/20 bg-blue-100 text-primary mx-auto shadow-md z-10 animate-fadeIn">
      <div className="flex justify-between items-center space-x-2 py-5 px-10">
        <div className="">
          <Link href="/" className="flex justify-center space-x-2 items-center">
            <img
              src="/globe.svg"
              alt="logo"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 cursor-pointer"
            />
            <h1 className="text-md font-semibold text-primary">
              TechSolutions
            </h1>
          </Link>
        </div>

        <div className={`font-heading ${isOpen ? "block" : "hidden"} sm:block`}>
          <ul className="hidden sm:flex space-x-4">
            {headersData.map((header) => (
              <React.Fragment key={header.id}>
                <li className="cursor-pointer hover:text-gray-900 transition duration-200 ease-in-out">
                  <Link href={header.link}>
                    <span className="border-b-2 border-transparent hover:border-current pb-1">
                      {header.title}
                    </span>
                  </Link>
                </li>
                <span>/</span>
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            className={`font-heading text-md hover:text-green-900 transition duration-200 ease-in-out relative ${
              isOpen ? "" : "sm:hidden"
            }`}
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          <div
            onClick={() => setDarkMode(!darkMode)}
            className="sm:hidden md:flex"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </div> */}
          <div className="font-heading text-lg">
            <Link
              href="/Page404"
              className="border-b-2 border-transparent hover:border-current pb-1 cursor-pointer hover:text-gray-900 transition duration-200 ease-in-out"
            >
              404 Page
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.ul
          className="flex flex-col space-y-3 sm:hidden mx-10 font-subheading"
          variants={variants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 1.5 }}
        >
          {headersData.map((header) => (
            <li
              key={header.id}
              className="cursor-pointer hover:text-gray-900 transition duration-200 ease-in-out"
            >
              <span className="border-b-2 border-transparent hover:border-current pb-1">
                <Link href={header.link}>{header.title} /</Link>
              </span>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
