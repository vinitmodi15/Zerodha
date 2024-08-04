import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import KiteconnectAPI from "./KiteconnectAPI";
import Universe from "./Universe";

function Products() {
  return (
    <>
      <Hero />
      <LeftSection image="media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" TryDemo="Try demo →" learnMore="" LearnMore="Learn more →" googlePlay="" appleStore=""/>
      
      <RightSection image="media/images/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link="" LinkName="Learn more →"/>
      
      <LeftSection image="media/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" TryDemo="Coin →" learnMore="" googlePlay="" appleStore=""/>

      <KiteconnectAPI image="media/images/kiteconnect.png" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link="" LinkName="Kite Connect →"/>
      
      <LeftSection image="media/images/varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appleStore=""/>

      <p className="text-center mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

      <Universe />
    </>
  );
}

export default Products;
