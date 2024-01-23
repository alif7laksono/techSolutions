import React from "react";
import membersData from "../../data/membersData";

export default function About() {
  return (
    <section className="w-9/10 sm:w-4/5 md:w-2/3 bg-secondary text-primary p-6 md:p-12 mx-auto mt-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-8">
          <div>
            <img
              className="mx-auto md:mx-0 w-full h-auto md:w-3/4"
              src="/about/about-1.svg"
              alt="About Image"
            />
          </div>

          <div className="mx-auto sm:w-full text-center sm:text-left">
            <h1 className="font-heading text-4xl font-bold mb-4 mt-5 sm:mt-1 md:mt-2">
              About Us
            </h1>
            <p className="text-md leading-loose font-body text-primary">
              At <b>TechSolutions</b>, we believe in the power of technology to
              drive positive change. Founded in <b>2023</b>, our mission is{" "}
              <i>
                to empower businesses by providing them with cutting-edge
                software solutions.
              </i>
            </p>
          </div>
        </div>

        <div className="my-10 bg-blue-100 p-5 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center font-heading text-blue-700">
            Our Values
          </h1>
          <ul className="list-disc pl-5 font-body leading-loose text-gray-700">
            <li className="py-2">
              <span className="font-semibold">Innovation:</span> We stay ahead
              of the curve, embracing the latest technologies to offer
              innovative solutions.
            </li>
            <li className="py-2">
              <span className="font-semibold">Client-Centric:</span> Your
              success is our success. We prioritize understanding your unique
              needs and delivering exceptional results.
            </li>
            <li className="py-2">
              <span className="font-semibold">Integrity:</span> Trust is the
              foundation of our relationships. We are committed to transparency,
              honesty, and ethical business practices.
            </li>
          </ul>
        </div>

        <div className="b-8 text-center">
          <h1 className="text-3xl font-bold mb-4 font-heading">
            Meet Our Team
          </h1>
          <p className="font-subheading opacity-80">
            Get to know the passionate individuals behind TechSolutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {membersData.map((member) => (
              <div
                key={member.id}
                className="text-center transform transition duration-500 hover:scale-110"
              >
                <img
                  className="rounded-full mx-auto"
                  src={member.imgSrc}
                  alt={`Team Member ${member.name}`}
                />
                <h2 className="mt-2 font-bold text-blue-500 cursor-pointer">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-500 cursor-pointer">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
