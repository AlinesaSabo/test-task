import React from "react";
import CardList from "../CardList/CardList";
import s from "./SectionTwo.module.css";
import BgGradient from "../../assets/Group 2.png";
import Star1 from "../../assets/icon/star/star-img (5).svg";
import Star2 from "../../assets/icon/star/star-img (6).svg";

const SectionTwo = () => {
  return (
    <section className={s.sectionTwo}>
      <div className={s.container}>
        <div className={s.sectionText}>
          <h2>Lörem ipsum häsat promotiv sedan depatologi tenes.</h2>
          <p>Lörem ipsum sosm niliga syntris. </p>
        </div>
        <CardList />
      </div>
      <img src={BgGradient} alt="BgGradient" className={s.BgGradient} />
      <img src={Star1} alt="Star1" className={s.Star1} />
      <img src={Star2} alt="Star2" className={s.Star2} />
    </section>
  );
};

export default SectionTwo;
