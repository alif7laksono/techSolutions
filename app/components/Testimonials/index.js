import React from "react";
import testimonialsData from "../../data/testimonialsData";

export default function Testimonials() {
  return (
    <div className=" p-4 md:p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Testimonials</h2>
      <div className="testimonials-container overflow-x-auto max-w-full">
        <div className="flex flex-nowrap overflow-x-auto animate-scroll justify-center ">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-blue-100 p-4 rounded shadow mr-4 w-auto"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-96 object-cover rounded mb-4"
              />
              <p className="italic text-gray-600">
                "{testimonial.testimonial}"
              </p>
              <div className="text-center space-y-2">
                <p className="mt-4 font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
