import React from "react";
import PlanCard from "../PlanCard/PlanCard";
import s from "./SectionPlans.module.css";
import background from "../../assets/Bg.png";

const SectionPlans = () => {
  return (
    <div className={s.section}>
      <div className={s.description}>
        <h5>Plans</h5>
        <h2>Exclusive Membership Plans</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
          aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
        </p>
      </div>
      <img src={background} alt="background" className={s.background} />
      <ul className={s.cardList}>
        <PlanCard
          title="Colleagues"
          price="3 329"
          oldPrice="75 900"
          discount="5"
          description="Valid when paying for tuition for a group of three people"
        />
        <PlanCard
          title="Colleagues"
          price="3 329"
          oldPrice="75 900"
          discount="5"
          description="Valid when paying for tuition for a group of three people"
          isLarge={true}
        />
        <PlanCard
          title="Colleagues"
          price="3 329"
          oldPrice="75 900"
          discount="5"
          description="Valid when paying for tuition for a group of three people"
        />
      </ul>
    </div>
  );
};

export default SectionPlans;
