import React from "react";
import s from "./ModuleCard.module.css";
import Img from "../../assets/image/fon/Rectangle 39227.png";

const ModuleCard = ({ title, description, skills, img }) => {
  return (
    <div className={s.card}>
      <div className={s.cardTitle}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{description}</p>
        <p className={s.descriptionSkills}>What we will learn and do:</p>
        <div className={s.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={s.skill}>
              {skill}
            </span>
          ))}
        </div>
        <img src={img} alt="image" className={s.image} />
      </div>
      <img src={Img} alt="Img" className={s.img} />
    </div>
  );
};

export default ModuleCard;
