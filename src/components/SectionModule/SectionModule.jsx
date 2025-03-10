import React from "react";
import s from "./SectionModule.module.css";
import ModuleCard from "../ModuleCard/ModuleCard";
import safe from "../../assets/image/safe/image 501.png";
import safe2 from "../../assets/image/safe/image 501 (1).png";
import safe3 from "../../assets/image/safe/image 501 (2).png";
import bg from "..//../assets/Group 3.png";
import Ellipse from "../../assets/Ellipse 2.png";

const modules = [
  {
    title: "Module 1: The foundation",
    image: safe,
    description:
      "Discover the most promising niche in cryptocurrencies where you can make decent money on your own",
    skills: ["Apps Development", "SEO Services", "Data Analysis"],
  },
  {
    title: "Module 2: The foundation",
    image: safe2,
    description:
      "Discover the most promising niche in cryptocurrencies where you can make decent money on your own",
    skills: ["Apps Development", "SEO Services", "Data Analysis"],
  },
  {
    title: "Module 3: The foundation",
    image: safe3,
    description:
      "Discover the most promising niche in cryptocurrencies where you can make decent money on your own",
    skills: ["Apps Development", "SEO Services", "Data Analysis"],
  },
];

const SectionModule = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
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
              img={module.image}
            />
          ))}
        </div>
      </div>
      <img src={Ellipse} alt="Ellipse" className={s.ellipse} />
      <img src={bg} alt="bg" className={s.bg} />
    </section>
  );
};

export default SectionModule;
