import React from "react";
import s from "./Hero.module.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import CardHero from "../CardHero/CardHero";
import GradientBackground from "../HeroBackground/GradientBackground";
import people1 from "../../assets/image/people/people1.jpg";
import people2 from "../../assets/image/people/people2.jpg";
import people3 from "../../assets/image/people/people3.png";
import people4 from "../../assets/image/people/people4.jpg";
import people5 from "../../assets/image/people/people5.jpg";
import people6 from "../../assets/image/people/people6.jpg";

const Hero = () => {
  const avatars = [people1, people2, people3, people4, people5, people6];

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
