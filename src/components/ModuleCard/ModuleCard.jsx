import React from "react";
import s from "./ModuleCard.module.css";

const ModuleCard = ({ title, description, skills }) => {
  return (
    <div className={s.card}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
      <div className={s.skills}>
        {skills.map((skill, index) => (
          <span key={index} className={s.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ModuleCard;
