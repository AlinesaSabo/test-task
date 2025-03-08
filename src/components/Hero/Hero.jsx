import React from "react";
import s from "./Hero.module.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import CardHero from "../CardHero/CardHero";
import GradientBackground from "../HeroBackground/GradientBackground";

const Hero = () => {
  return (
    <div className={s.hero}>
      <GradientBackground />
      <Header />
      <div className={s.heroContent}>
        <div className={s.tagline}>Lörem ipsum treras.</div>
        <h1 className={s.title}>
          Own Your Crypto <br />
          Adventure
        </h1>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        <Button>Get Started</Button>
      </div>
      <div>
        <CardHero number="5,000" text="lorem ipsum dolor sit amet" />
        <CardHero number="2,000" text="lorem ipsum dolor sit amet" />
      </div>
    </div>
  );
};

export default Hero;
