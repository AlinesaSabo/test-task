import React from "react";
import s from "./PlanCard.module.css";
import Button from "../Button/Button";

const PlanCard = ({
  title,
  price,
  oldPrice,
  discount,
  isLarge,
  description,
}) => {
  return (
    <li className={s.cardItem}>
      <div className={`${s.card} ${isLarge ? s.largeCard : ""}`}>
        <div className={s.title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={s.details}>
          <span>9 modules in 6 weeks</span>
          <span>In one payment</span>
        </div>

        <div className={s.pricing}>
          <div className={s.mainPrice}>
            <span className={s.price}>
              3 329<span className={s.priceUnit}>/month</span>
            </span>

            <span className={s.priceMonth}>
              <s>3 329</s> for 24 months
            </span>
          </div>

          <div className={s.oldPrices}>
            <span className={s.fullPrice}>75 900</span>
            <span className={s.oldPrice}>
              <s>79 900</s>
            </span>
          </div>
          <span className={s.discount}>-5%</span>
        </div>

        <div className={s.benefits}>
          <ul className={s.benefitsList}>
            <li>9 modules in 6 weeks</li>
            <li>Webinars with experts</li>
            <li>Practical tasks</li>
            <li>
              Certificate of advanced training based on the results of training
            </li>
            <li>Unlimited access to materials</li>
            <li>Group chat with experts and course coordinators</li>
            <li>Professional community</li>
          </ul>
        </div>
        <Button className={s.button}>Select</Button>
      </div>
    </li>
  );
};

export default PlanCard;
