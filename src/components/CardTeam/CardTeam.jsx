import React from "react";
import Button from "../Button/Button";
import s from "./CardTeam.module.css";

const CardTeam = ({ title, image, description, id }) => {
  return (
    <div className={s.card}>
      <div className={s.description}>
        <h5>Team</h5>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button>Get Started</Button>
      </div>
      <div className={s.img}>
        <img src={image} alt={id} width="681px" height="494px" />
      </div>
    </div>
  );
};

export default CardTeam;
