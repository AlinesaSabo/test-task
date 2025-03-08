import React from "react";
import s from "./Hero.module.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import CardHero from "../CardHero/CardHero";
import GradientBackground from "../HeroBackground/GradientBackground";
import peple1 from "../../assets/image/peple1.jpg";
import peple2 from "../../assets/image/peple2.jpg";
import peple3 from "../../assets/image/peple3.jpg";
import peple4 from "../../assets/image/peple4.jpg";
import peple5 from "../../assets/image/peple5.jpg";
import peple6 from "../../assets/image/peple6.jpg";

const Hero = () => {
  const avatars = [peple1, peple2, peple3, peple4, peple5, peple6];

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
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <CardHero number="5,000" text="lorem ipsum sit amet" images={avatars} />
        <CardHero
          number="2,000"
          text="lorem ipsum dolor sit amet"
          images={avatars}
        />
      </div>
    </div>
  );
};

export default Hero;
