import React from "react";
import s from "./CardHero.module.css";

const CardHero = ({ number, text, images, variant }) => {
  return (
    <div
      className={`${s.card} ${variant === "pink" ? s.pinkCard : s.blueCard}`}
    >
      <h3 className={s.number}>{number}+</h3>
      <p className={s.text}>{text}</p>
      <div className={s.avatarGroup}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`User ${index}`}
            className={s.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default CardHero;
