"use client";
import React, { useRef } from "react";
import latestArticles from "../../data/latestArticles";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function OurLatestNews() {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    const articleWidth = 96 + 4 * 2;
    const visibleArticles = Math.floor(
      scrollContainer.current.clientWidth / articleWidth
    );
    scrollContainer.current.scrollLeft -= articleWidth * visibleArticles;
  };

  const scrollRight = () => {
    const articleWidth = 96 + 4 * 2;
    const visibleArticles = Math.floor(
      scrollContainer.current.clientWidth / articleWidth
    );
    scrollContainer.current.scrollLeft += articleWidth * visibleArticles;
  };

  return (
    <div className="sm:w-4/5 md:w-3/5 lg:w-3/5 mx-auto">
      <div className="">
        <div className="w-4/5 mx-auto sm:w-4/5 md:w-4/5 mb-5">
          <h1 className="font-heading font-bold text-4xl text-center mb-4">
            Our Latest News
          </h1>
          <div className="text-center w-3/4 mx-auto">
            <span className="font-subheading text-center text-md opacity-80">
              A Private Limited is the most popular type of partnership Malta.
              The limited liability is, in fact, the only type of company
              allowed by Companies.
            </span>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 z-10 p-4 bg-gray-400 rounded-full shadow transform -translate-y-1/2"
          >
            <IoIosArrowBack />
          </button>
          <div ref={scrollContainer} className="flex overflow-x-auto mb-8">
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="flex-shrink-0 w-full sm:w-96 bg-white p-4 rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer mr-4"
              >
                <Link href="/detailBlog">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded mb-4 transition duration-500 ease-in-out transform hover:scale-110"
                  />
                </Link>
                <Link href="/detailBlog">
                  <div className="flex items-center justify-between text-sm text-gray-500 my-3">
                    <div className="flex items-center">
                      <AiOutlineUser className="mr-1" />
                      <p className="hover:text-hover mr-2 capitalize">
                        {article.publishedBy}
                      </p>
                    </div>
                    <p className="hover:text-hover">{article.category}</p>
                  </div>
                </Link>
                <Link href="/detailBlog">
                  <h6 className="font-bold mb-2">{article.title}</h6>
                  <p className="mb-2 line-clamp-2 text-sm text-body">
                    {article.summary}
                  </p>
                </Link>
                <div className="flex justify-between items-center">
                  <div>
                    <Link
                      href="/detailBlog"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Read More
                    </Link>
                  </div>

                  <div className="flex justify-between items-center space-x-1 text-sm">
                    <span className="">24</span>
                    <AiOutlineHeart className="text-red-500 hover:text-red-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 z-10 p-4 bg-gray-400 rounded-full shadow transform -translate-y-1/2"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
