import React, { useEffect, useState } from "react";
import s from "./CardList.module.css";

const CardList = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`.${s.cardList}`);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${s.cardList} ${isVisible ? s.visible : ""}`}>
      {[1, 2, 3].map((item) => (
        <div className={s.card} key={item}>
          Lorem ipsum dorade bakig till geosylig postmodem.
        </div>
      ))}
    </div>
  );
};

export default CardList;
