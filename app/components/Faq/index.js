"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import faqData from "../../data/faqData";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="my-10 animate-fadeIn">
      <div className="container mx-auto p-5 rounded-lg shadow-md w-3/4">
        <h1 className="text-3xl font-bold text-center font-heading text-primary my-10">
          Frequently Asked Question
        </h1>
        <div>
          {faqData.map((faq, index) => (
            <div key={faq.id} className="my-6">
              <div
                onClick={() => handleClick(index)}
                className="flex justify-between items-center cursor-pointer p-3 rounded transition-colors duration-200 hover:bg-blue-100"
              >
                <h2
                  className={`font-semibold text-primary ${
                    activeIndex === index ? "text-blue-700" : ""
                  }`}
                >
                  {faq.question}
                </h2>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {activeIndex === index && (
                <p className="text-primary opacity-90 mt-2 pl-5 transition-all duration-200 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
