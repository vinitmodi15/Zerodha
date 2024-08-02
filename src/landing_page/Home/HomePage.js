import React from "react";
import Hero from "./Hero";
import OpenAccount from "../../OpenAccount";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Awards from "./Awards";
import Trust from "./Trust";
import Pricing from "./Pricing";
import Education from "./Education";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Trust />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
