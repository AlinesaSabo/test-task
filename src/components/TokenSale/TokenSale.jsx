import React from "react";
import s from "./TokenSale.module.css";
import TokenCard from "../TokenCard/TokenCard";
import profitIcon from "../../assets/icon/profitIcon.svg";
import supportIcon from "../../assets/icon/supportIcon.svg";
import confirmationIcon from "../../assets/icon/confirmationIcon.svg";
import TokenIMG from "../../assets/image/fon/image 1.png";
import Star from "../../assets/icon/star/star-img (4).svg";

const TokenSale = () => {
  return (
    <section className={s.section} id="token-sale">
      <img src={TokenIMG} alt="TokenIMG" className={s.TokenIMG} />
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
      <img src={Star} className={s.Star} />
    </section>
  );
};

export default TokenSale;
