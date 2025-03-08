import React from "react";
import s from "./CardHero.module.css";

const CardHero = ({ number, text, images }) => {
  return (
    <div className={s.card}>
      <h3 className={s.number}>{number}+</h3>
      <p className={s.text}>{text}</p>
      <div className={s.avatarGroup}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`User ${index}`}
            className={s.avatar}
            style={{ transform: `rotate(15deg)` }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardHero;
