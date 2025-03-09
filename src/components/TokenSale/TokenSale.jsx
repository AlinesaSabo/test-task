import React from "react";
import s from "./TokenSale.module.css";
import TokenCard from "../TokenCard/TokenCard";
import profitIcon from "/public/assets/icon/profitIcon.svg";
import supportIcon from "/public/assets/icon/supportIcon.svg";
import confirmationIcon from "/public/assets/icon/confirmationIcon.svg";

const TokenSale = () => {
  return (
    <section className={s.section}>
      <div className={s.description}>
        <h5>Our Token</h5>
        <h2>Token seal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
          aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
        </p>
      </div>
      <ul className={s.cards}>
        <TokenCard
          icon={profitIcon}
          title="Enjoy The Profit"
          gradientClass="gradientProfit"
        />
        <TokenCard
          icon={supportIcon}
          title="Customer"
          gradientClass="gradientSupport"
        />
        <TokenCard
          icon={confirmationIcon}
          title="Confirmation"
          gradientClass="gradientConfirmation"
        />
      </ul>
    </section>
  );
};

export default TokenSale;
