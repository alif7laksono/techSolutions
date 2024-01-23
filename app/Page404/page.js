import React from "react";
import { IoIosHome } from "react-icons/io";
import Link from "next/link";

export default function Page404() {
  return (
    <div className="lg:w-3/4 md:w-4/5 w-4/6 mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 items-center">
          <div className="w-full md:w-2/5 text-left mb-10 md:mb-0">
            <h1 className="text-5xl font-semibold font-heading mb-5">
              Oopps!!!
            </h1>
            <h1 className="text-2xl font-semibold font-heading mb-5">
              Error 404 - Page not found
            </h1>
            <span className="font-body leading-loose text-lg">
              The page you requeted could not be found.
            </span>
            <br />
            <div className="mt-10 font-subheading justify-start flex">
              <span className="text-gray-500">
                <Link
                  href="/"
                  className="flex items-center justify-center space-x-2 hover:text-gray-900"
                >
                  <IoIosHome size={24} />
                  <span>Go back</span>
                </Link>
              </span>
            </div>
          </div>
          <div className="w-full md:w-4/5">
            <img src="/404.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
