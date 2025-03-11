import React from "react";
import s from "./App.module.css";
import Hero from "../Hero/Hero";
import TokenSale from "../TokenSale/TokenSale";
import SectionTwo from "../SectionTwo/SectionTwo";
import ServicesSection from "../ServicesSection/ServicesSection";
import Team from "../Team/Team";
import SectionPlatium from "../SectionModule/SectionModule";
import SectionPeople from "../SectionPeople/SectionPeople";
import SectionPlans from "../SectionPlans/SectionPlans";
import VideoPreview from "../VideoPreview/VideoPreview";

function App() {
  return (
    <div className={s.container}>
      <Hero />
      <TokenSale />
      <SectionTwo />
      <ServicesSection />
      <Team />
      <SectionPlatium />
      <SectionPeople />
      <SectionPlans />
      <VideoPreview videoUrl="https://www.youtube.com/embed/VIDEO_ID" />
    </div>
  );
}

export default App;
