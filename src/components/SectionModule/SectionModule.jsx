import React from "react";
import s from "./SectionModule.module.css";
import ModuleCard from "../ModuleCard/ModuleCard";

const modules = [
  {
    title: "Module 1: The foundation",
    description:
      "Discover the most promising niche in cryptocurrencies where you can make decent money on your own",
    skills: ["Apps Development", "SEO Services", "Data Analysis"],
  },
  {
    title: "Module 2: The foundation",
    description:
      "Discover the most promising niche in cryptocurrencies where you can make decent money on your own",
    skills: ["Apps Development", "SEO Services", "Data Analysis"],
  },
  {
    title: "Module 3: The foundation",
    description:
      "Discover the most promising niche in cryptocurrencies where you can make decent money on your own",
    skills: ["Apps Development", "SEO Services", "Data Analysis"],
  },
];

const SectionModule = () => {
  return (
    <section className={s.section}>
      <div className={s.description}>
        <h5>Lorem ipsum</h5>
        <h2>Amet pretium</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
          aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
        </p>
      </div>
      <div className={s.list}>
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            description={module.description}
            skills={module.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionModule;
