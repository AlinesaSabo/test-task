import React from "react";
import s from "./GradientBackground.module.css";
import EclipseOne from "../../assets/EclipseOne.png";
import EllipseTree from "../../assets/EllipseTree.png";
import EclipseTwo from "../../assets/EclipseTwo.png";
import Bitcoin from "../../assets/image/fon/Bitcoin-1.png";

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
    </div>
  );
};

export default GradientBackground;
