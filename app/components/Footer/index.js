"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef();

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-blue-100 text-primary p-10 animate-fadeIn">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-4 ">
              Connect with TechSolutions
            </h1>
            <p className="mb-4 font-body italic opacity-80">
              Have a question or interested in our services? <b>Let's talk!</b>
            </p>
            <button className="bg-button1 text-white py-2 px-4 rounded transform hover:scale-110 hover:bg-hover">
              <Link href="/contact">Reach Us</Link>
            </button>
          </div>
          <div className="font-body opacity-80">
            <p className="leading-relaxed">
              <b>Address : </b> Semarang <br />
              <b>Email :</b> info@techsolutions.com <br />
              <b>Phone :</b> +123 73823987
            </p>
            <p className="mb-4 italic opacity-80">
              Stay updated on the latest from TechSolutions. Connect with us on
              social media.
            </p>
            <ul className="flex space-x-4">
              <li className="transform hover:scale-125 cursor-pointer">
                <FaFacebook size={24} />
              </li>
              <li className="transform hover:scale-125 cursor-pointer">
                <FaTwitter size={24} />
              </li>
              <li className="transform hover:scale-125 cursor-pointer">
                <FaLinkedin size={24} />
              </li>
              <li className="transform hover:scale-125 cursor-pointer">
                <FaInstagram size={24} />
              </li>
            </ul>
          </div>
          <div className="">
            <p className="mb-4 font-body opacity-80 leading-relaxed">
              Ready to transform your business? Contact TechSolutions today for
              innovative software solutions.
            </p>
            <button className="bg-button1 text-white py-2 px-4 rounded transform hover:scale-110 hover:bg-hover">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div ref={footerRef}>
        {isVisible && (
          <div
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              cursor: "pointer",
            }}
          >
            <FaArrowUp size={30} />
          </div>
        )}
      </div>
    </footer>
  );
}
