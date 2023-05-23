import React from "react";
import Spread from "./Spread";
import Banner from "./Banner";
import HeroCta from "./HeroCta";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="relative">
      <HeroText />
      <Banner />
      <HeroCta />
      <Spread />
    </section>
  );
};

export default Hero;
