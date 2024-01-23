import React from "react";

export default function CtaSection() {
  return (
    <div className="bg-blue-100 text-gray-900 p-10 md:p-20 animate-fadeIn animation-duration[2s]">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-x-4">
        {/* left side */}
        <div className="w-full md:w-2/3 text-center md:text-left p-4 md:p-8">
          <h1 className="text-4xl mb-4 md:text-5xl text-heading font-bold">
            Ready to Transform Your Business?
          </h1>
          <h3 className="text-xl mb-4 md:text-2xl tech-subheading">
            Discover the Power of Custom Software Solutions with TechSolutions
          </h3>
          <div className="mb-8 text-sm text-body leading-relaxed opacity-80">
            <p>
              At TechSolutions, we're committed to helping businesses like yours
              thrive through innovative and customized software solutions. If
              you're ready to unlock the full potential of your business, take
              the next step with TechSolutions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-0 md:space-x-1 mb-6">
            <div className="md:w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-48">
              <a
                href="/contact"
                className="w-full text-center text-md inline-block px-3 py-2 border border-blue-500 text-blue-500 rounded-md font-bold transition duration-300 hover:bg-blue-500 hover:text-white mt-2 md:mt-0"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-12 mb-6">
            <div>
              <p className="font-bold text-blue-500 text-lg">1000+</p>
              <p className="text-lg"> Happy Clients</p>
            </div>
            <div>
              <p className="font-bold text-blue-500 text-lg">95%+</p>
              <p className="text-lg"> Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:hidden lg:block">
          <img src="cta/cta-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
