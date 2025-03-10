import React from "react";
import Button from "../Button/Button";
import s from "./CardTeam.module.css";
import bg from "../../assets/image/fon/bggreanGR.png";

const CardTeam = ({ title, image, description, id, card }) => {
  return (
    <div className={s.card}>
      <div className={s.description}>
        <h5>Team</h5>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button className={s.button}>Get Started</Button>
      </div>
      <div className={s.img}>
        <img src={image} alt={id} width="681px" height="494px" />
        <img src={bg} alt="bg" className={s.bg} />
      </div>
      <div className={s.cardInfo}>
        <h5>{card.title}</h5>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default CardTeam;
