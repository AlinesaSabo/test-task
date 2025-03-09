import React from "react";
import s from "./GradientBackground.module.css";
import EclipseOne from "../../assets/EclipseOne.png";
import EllipseTree from "../../assets/EllipseTree.png";
import EclipseTwo from "../../assets/EclipseTwo.png";
import Bitcoin from "../../assets/image/fon/Bitcoin-1.png";
import LiteCoin from "../../assets/image/fon/LiteCoin-1.png";
import Etherium from "../../assets/image/fon/Etherium-2.png";
import Monero from "../../assets/image/fon/Monero-2.png";
import Star from "../../assets/icon/star/star-img.svg";
import Star2 from "../../assets/icon/star/star-img (1).svg";
import Star3 from "../../assets/icon/star/star-img (2).svg";
import Star4 from "../../assets/icon/star/star-img (3).svg";

const GradientBackground = () => {
  return (
    <div className={s.gradientContainer}>
      <div className={s.greenGlowEllipse}>
        <img src={EclipseOne} />
      </div>
      <div className={s.purpleGlow}>
        <img src={EllipseTree} width="100%" height="766" />
      </div>
      <div className={s.pinkRestangle}>
        <img src={EclipseTwo} width="603" height="690" />
      </div>
      <img src={Bitcoin} alt="Bitcoin" className={s.bitcoinBG} />
      <img src={Star} className={s.StarL} />
      <img src={Star2} className={s.StarS} />
      <img src={Star3} className={s.StarM} />
      <img src={Star4} className={s.StarxS} />

      <img
        src={LiteCoin}
        alt="LiteCoin"
        className={s.liteCoin}
        width="69"
        height="69"
      />
      <img
        src={Etherium}
        alt="Etherium"
        className={s.etherium}
        width="107"
        height="107"
      />
      <img
        src={Monero}
        alt="Monero"
        className={s.monero}
        width="143"
        height="145"
      />
    </div>
  );
};

export default GradientBackground;
