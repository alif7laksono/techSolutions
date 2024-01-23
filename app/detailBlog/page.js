"use client";
import React from "react";
import { useState } from "react";
import articleData from "../data/articleData";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineBook,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiFillCamera,
  AiFillVideoCamera,
  AiFillGift,
} from "react-icons/ai";
import latestArticles from "../data/latestArticles";
import commentsData from "../data/commentsData";

import HeaderBlog from "../components/HeaderBlog";
import Footer from "../components/Footer";

export default function DetailBlog() {
  const [isOpen, setIsOpen] = useState(false);
  const article = articleData[0];

  return (
    <div className="bg-gray-50">
      <HeaderBlog />
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold mb-4 text-center leading-relaxed">
          {article.title}
        </h1>
        <div className="flex items-center space-x-2 mb-4 justify-between">
          <div className="flex justify-center items-center space-x-2">
            <AiOutlineUser className="text-gray-500" />
            <p className="text-gray-500">{article.publishedBy}</p>
            <div className="flex items-center space-x-1">
              <AiOutlineCalendar className="text-gray-500" />
              <p className="text-gray-500">{article.publishedOn}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <AiOutlineClockCircle className="text-gray-500" />
            <p className="text-gray-500">{article.readingTime}</p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <AiOutlineComment className="text-gray-500 " />
            <span className="ml-1">100</span>
            <AiOutlineHeart className="text-gray-500 text-sm" />
            <span className="ml-1">100</span>
          </div>
          <div className="flex items-center space-x-4">
            <AiOutlineShareAlt className="text-gray-500 cursor-pointer" />
            <span className="ml-1 text-gray-500 cursor-pointer">Follow</span>
            <AiOutlineBook className="text-gray-500 cursor-pointer" />
          </div>
        </div>
        <hr className="mb-4" />

        <div>
          <img src={article.img} alt={article.title} />
        </div>
        <div className="my-5 opacity-80">
          <h2 className="text-2xl font-bold mb-2"></h2>
          <p className="text-gray-700">{article.summary}</p>

          <div className="my-5">
            <h2 className="text-2xl font-bold mb-2">Introduction</h2>
            <p className="text-gray-700 mb-4">
              In the fast-paced digital era, mobile applications have become an
              integral part of our daily lives, transforming the way we
              communicate, work, and entertain ourselves. As the mobile app
              landscape continues to evolve, staying abreast of the latest
              trends and implementing effective strategies is crucial for
              developers, businesses, and users alike. This article explores the
              current trends shaping the mobile app ecosystem and provides
              insights into strategies that can help navigate this dynamic
              terrain.
            </p>

            <h2 className="text-2xl font-bold mb-2">
              User Experience (UX) Design:
            </h2>
            <p className="text-gray-700 mb-4">
              User experience remains at the forefront of mobile app
              development, with an increasing emphasis on creating intuitive and
              engaging interfaces. Developers are focusing on enhancing
              navigation, minimizing load times, and optimizing user
              interactions. Gesture-based controls, dark mode options, and
              personalized user interfaces are gaining traction, ensuring that
              apps provide a seamless and enjoyable experience for users.
            </p>
            <h2 className="text-2xl font-bold mb-2">Conclusion:</h2>
            <p className="text-gray-700 mb-4">
              Navigating the ever-evolving mobile app landscape requires a keen
              understanding of emerging trends and a proactive approach to
              adapting strategies. Developers and businesses that prioritize
              user experience, leverage emerging technologies, and stay abreast
              of security considerations will be well-positioned to succeed in
              this dynamic and competitive environment. By embracing innovation
              and fostering a user-centric mindset, stakeholders can create
              mobile applications that not only meet the current demands but
              also anticipate the needs of the future.
            </p>
            <div className="flex items-center justify-center sm:justify-start my-7">
              <span className="mr-2 bg-gray-200 font-semibold text-gray-900 transform hover:scale-105 transition-all duration-200 ease-in-out rounded-full px-3 py-1 cursor-pointer">
                Technology
              </span>
              <span className="mr-2 bg-gray-200 font-semibold text-gray-900 transform hover:scale-105 transition-all duration-200 ease-in-out rounded-full px-3 py-1 cursor-pointer">
                Mobile App
              </span>
              <span className="mr-2 bg-gray-200 font-semibold text-gray-900 transform hover:scale-105 transition-all duration-200 ease-in-out rounded-full px-3 py-1 cursor-pointer">
                Software Development
              </span>
            </div>

            {/* leave a comment section */}
            <hr className="my-5" />
            <h2 className="text-2xl font-bold mb-2">Leave a Comment</h2>

            <div className="space-y-4">
              <textarea
                id="comment"
                placeholder="Write a comment..."
                className="mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-24 px-4 py-2 text-gray-700 resize-none"
              />
              <div className="flex justify-between space-x-2">
                <div className="flex justify-between space-x-3">
                  <AiFillCamera className="text-gray-500 cursor-pointer text-2xl" />
                  <AiFillVideoCamera className="text-gray-500 cursor-pointer text-2xl" />
                  <AiFillGift className="text-gray-500 cursor-pointer text-2xl" />
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 rounded text-gray-500 font-medium">
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded bg-blue-500 text-white font-medium">
                    Publish
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="flex justify-between items-center mt-5">
              <h3 className="text-xl font-bold">2 Comments</h3>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-900"
                >
                  Sort by: {isOpen ? "▲" : "▼"}
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        className="w-full text-right block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
                        role="menuitem"
                      >
                        Newest
                      </button>
                      <button
                        className="w-full text-right block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
                        role="menuitem"
                      >
                        Oldest
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div> */}

            {/* comment section */}
            {/* <hr className="my-5" />
            <h2 className="text-2xl font-bold mb-2">Comments</h2>
            {commentsData.map((comment) => (
              <div
                key={comment.id}
                className="p-4 border-2 rounded-md border-gray-300 shadow-sm mb-4"
              >
                <h3 className="font-bold text-lg mb-2">{comment.author}</h3>
                <p className="text-gray-700">{comment.text}</p>
                <p className="text-sm text-gray-500">{comment.date}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="md:w-3/4 sm:w-4/5 w-full mx-auto">
        <h2 className="text-4xl font-bold font-heading mb-4 text-center">
          Featured Posts
        </h2>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {latestArticles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="bg-gray-100 p-4 rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-64 object-cover rounded mb-4 transition duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="flex items-center justify-between text-sm text-gray-500 my-3">
                <div className="flex items-center">
                  <AiOutlineUser className="mr-1" />
                  <p className="hover:text-hover mr-2 capitalize">
                    {article.publishedBy}
                  </p>
                </div>
                <p className="hover:text-hover">{article.category}</p>
              </div>

              <h6 className="font-bold mb-2">{article.title}</h6>
              <p className="mb-2 line-clamp-2 text-sm">{article.summary}</p>

              <div className="flex justify-between items-center">
                <div>
                  <a
                    href={article.url}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Read More
                  </a>
                </div>

                <div className="flex justify-between items-center space-x-1 text-sm">
                  <span className="">24</span>
                  <AiOutlineHeart className="text-red-500 hover:text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter and stay updated */}
      <div className="w-full sm:w-3/4 mx-auto mt-8 mb-8 bg-gray-100 p-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-2/5 sm:w-1/2 mb-4 lg:mb-0">
          <p className="font-heading text-xl sm:text-2xl md:text-2xl font-semibold text-center md:text-center lg:text-left">
            Subscribe to our newsletter
          </p>
          <p className="font-heading text-xl sm:text-2xl md:text-2xl font-semibold text-center md:text-center lg:text-left">
            and stay updated.
          </p>
        </div>

        <form className="w-full lg:w-3/5 flex flex-col lg:flex-row items-center space-x-0 lg:space-x-2">
          <input
            type="email"
            placeholder="Write your email here"
            className="mb-4 lg:mb-0 px-4 py-2 border border-gray-300 rounded-md text-sm text-body opacity-50 w-full lg:w-4/5"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm w-full lg:w-1/5"
          >
            Subscribe
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
