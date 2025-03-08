import React from "react";
import s from "./GradientBackground.module.css";

const GradientBackground = () => {
  return (
    <div className={s.gradientContainer}>
      <div className={s.greenGlowEllipse}>
        <img src="/src/assets/EclipseOne.png" />
      </div>
      <div className={s.purpleGlow}>
        <img src="/src/assets/EllipseTree.png" />
      </div>
      <div className={s.pinkGlow}>
        <img src="/src/assets/EllipseFour.png" />
      </div>
      <div className={s.pinkRestangle}>
        <img src="/src/assets/EclipseTwo.png" />
      </div>
      <div className={s.blueGlowElipcse}>
        <img src="/src/assets/RectangleTwo.png" />
      </div>
    </div>
  );
};

export default GradientBackground;
