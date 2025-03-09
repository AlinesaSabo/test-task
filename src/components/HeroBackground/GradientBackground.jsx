import React from "react";
import s from "./GradientBackground.module.css";

const GradientBackground = () => {
  return (
    <div className={s.gradientContainer}>
      <div className={s.greenGlowEllipse}>
        <img src="/src/assets/EclipseOne.png" />
      </div>
      <div className={s.purpleGlow}>
        <img src="/src/assets/EllipseTree.png" width="100%" height="766" />
      </div>
      <div className={s.pinkRestangle}>
        <img src="/src/assets/EclipseTwo.png" width="603" height="690" />
      </div>
      <img
        src="/src/assets/image/fon/Bitcoin-1.png"
        alt="Bitcoin"
        className={s.bitcoinBG}
      />
    </div>
  );
};

export default GradientBackground;
