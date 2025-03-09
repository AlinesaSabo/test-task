import React from "react";
import s from "./ServiceCard.module.css";
import BitcoinIcon from "/public/assets/icon/bitcoinicon.svg";
import SafeandSecure from "/public/assets/icon/safeandsecure.svg";
import Integrated from "/public/assets/icon/integrated.svg";

const icons = {
  bitcoinicon: BitcoinIcon,
  safeandsecure: SafeandSecure,
  integrated: Integrated,
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={s.card}>
      <div className={s.iconWrapper}>
        <img src={icons[icon]} alt={title} className={s.icon} />
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;
