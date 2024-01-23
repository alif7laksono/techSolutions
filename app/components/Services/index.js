import React from "react";
import servicesData from "../../data/servicesData";

export default function Services() {
  return (
    <section className="w-9/10 sm:w-4/5 md:w-3/4 bg-secondary text-primary p-6 md:p-12 mx-auto mt-2 animate-fadeIn">
      <div className="container mx-auto bg-blue-100 rounded-md p-5 shadow-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-center font-heading text-blue-700">
            Our Services
          </h1>
          <p className="font-subheading text-center text-gray-700 opacity-80">
            TechSolutions offers a comprehensive suite of services to meet your
            business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="text-center transform transition duration-500 hover:scale-110 flex justify-center p-4 rounded-lg shadow"
            >
              <img
                className="rounded-full mx-auto h-32 w-32"
                src={service.imgSrc}
                alt={`Service ${service.name}`}
              />
              <div className="flex flex-col text-left ml-4">
                <h2 className="mt-2 font-bold text-blue-500 cursor-pointer font-subheading mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-500 cursor-pointer font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
