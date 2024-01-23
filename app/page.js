import React from "react";
import Header from "./components/Header";
import Cta from "./components/Cta";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Faq from "./components/Faq";
import OurLatestNews from "./components/OurLatestNews";
import Footer from "./components/Footer";
// import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Cta />
      <Featured />
      <Services />
      {/* <Testimonials /> */}
      <Faq />
      <OurLatestNews />
      <Footer />
    </>
  );
}
