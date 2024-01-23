import React from "react";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineEdit,
  AiOutlineSearch,
} from "react-icons/ai";

export default function HeaderBlog() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-6 py-3 flex flex-wrap justify-between items-center">
                <div className="flex items-center mb-2 sm:mb-0">
                    <Link
                        href="/"
                        className="flex items-center text-gray-800 hover:text-gray-700"
                    >
                        <img className="h-6 w-6" src="/globe.svg" alt="logo" />
                        <span className="mx-3 text-xl font-semibold">TechSolutions</span>
                    </Link>
                </div>

                <div className="flex items-center w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
                    <input
                        type="text"
                        placeholder="Search posts by Title"
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
                    />
                </div>

                <div className="flex overflow-auto items-center">
                    <AiOutlineEdit className="h-6 w-6 text-gray-800 cursor-pointer" />
                    <Link
                        href="/detailBlog"
                        className="ml-1 mr-3 text-sm text-gray-700 cursor-pointer"
                    >
                        Write
                    </Link>
                    <AiOutlineUser className="h-6 w-6 text-gray-800 cursor-pointer" />
                    <Link
                        href="/detailBlog"
                        className="ml-1 mr-4 text-sm text-gray-700 cursor-pointer"
                    >
                        Sign Up
                    </Link>
                    <AiOutlineTeam className="h-6 w-6 text-gray-800 cursor-pointer" />
                    <Link
                        href="/detailBlog"
                        className="ml-1 text-sm text-gray-700 cursor-pointer"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
}
