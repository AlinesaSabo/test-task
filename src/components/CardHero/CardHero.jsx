import React from "react";
import s from "./CardHero.module.css";

const CardHero = ({ number, text, image }) => {
  return (
    <div className={s.card}>
      <h3 className={s.number}>{number}+</h3>
      <p className={s.text}>{text}</p>
      <img src={image} alt="Users" className={s.image} />
    </div>
  );
};

export default CardHero;
