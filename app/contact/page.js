"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [selectedPurpose, setSelectedPurpose] = useState("");

  const handlePurposeChange = (e) => {
    setSelectedPurpose(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with data:", {
      name: e.target.name.value,
      email: e.target.email.value,
      purpose: selectedPurpose,
      message: e.target.message.value,
    });
  };

  return (
    <>
      <Header />

      <div className="bg-blue-100 text-center p-10 animate-fadeIn">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-subheading leading-normal">
          Contact Us
        </h1>
        <p className="mb-8 text-body md:w-2/3 p-3 text-md md:text-lg lg:text-lg mx-auto w-9/10 leading-relaxed">
          Thank you for considering TechSolutions. We're here to help you with
          your custom software, mobile app, web development, and consulting
          needs. Please fill out the form below, and we'll get back to you as
          soon as possible.
        </p>
      </div>

      <div className="container mx-auto my-10 p-8 rounded-md shadow-md animate-slideInLeft">
        <h1 className="text-center text-4xl font-semibold mb-10">
          {" "}
          Let's start a conversation
        </h1>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              htmlFor="purpose"
              className="block text-sm font-medium text-gray-600"
            >
              Select a Purpose
            </label>
            <select
              id="purpose"
              name="purpose"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={handlePurposeChange}
              value={selectedPurpose}
              required
            >
              <option value="" disabled>
                Select a purpose
              </option>
              <option value="Custom Software Development">
                Custom Software Development
              </option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Consulting Services">Consulting Services</option>
            </select>
          </div>
          <div className="mb-4 col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="How can we assist you?"
              required
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* <div className="flex justify-start items-center space-x-8">
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Visit Us</h2>
            <p className="mb-2">TechSolutions Headquarters</p>
            <p>123 Tech Street, Cityville, State, Zip</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p className="mb-2">Email: info@techsolutions.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
