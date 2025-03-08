import React from "react";
import CardList from "../CardList/CardList";
import s from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <section className={s.sectionTwo}>
      <div className={s.sectionText}>
        <h2>Lörem ipsum häsat promotiv sedan depatologi tenes.</h2>
        <p>Lörem ipsum sosm niliga syntris. </p>
      </div>
      <CardList />
    </section>
  );
};

export default SectionTwo;
