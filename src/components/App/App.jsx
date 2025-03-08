import React from "react";
import s from "./App.module.css";
import Hero from "../Hero/Hero";
import TokenSale from "../TokenSale/TokenSale";
import SectionTwo from "../SectionTwo/SectionTwo";
import ServicesSection from "../ServicesSection/ServicesSection";

function App() {
  return (
    <div className={s.container}>
      <Hero />
      <TokenSale />
      <SectionTwo />
      <ServicesSection />
    </div>
  );
}

export default App;
