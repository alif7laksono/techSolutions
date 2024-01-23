import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import latestArticles from "../data/latestArticles";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="bg-blue-100 text-center p-10 animate-fadeIn">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-subheading leading-normal">
          Welcome to the TechSolutions Blog!
        </h1>
        <p className="mb-8 text-body md:w-2/3 p-3 text-md md:text-lg lg:text-lg mx-auto w-9/10 leading-relaxed">
          Explore the latest trends, industry insights, and expert perspectives
          on technology and software solutions. Our blog is designed to keep you
          informed, inspired, and engaged. Dive into our articles below and stay
          ahead in the world of innovation.
        </p>
      </div>
      <div className="p-8 min-h-screen animate-slideInLeft">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Latest Articles
              </h2>
            </div>
            <div>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                id="search"
                placeholder="Search articles..."
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-body opacity-50"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white p-4 rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer hover:scale-110"
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-64 object-cover rounded mb-4"
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
                <p className="mb-2 line-clamp-2 text-sm text-body">
                  {article.summary}
                </p>

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
                    {/* <span className="mr-2">{article.readingTime}</span> */}
                    <span className="">24</span>
                    <AiOutlineHeart className="text-red-500 hover:text-red-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Read More Articles
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
