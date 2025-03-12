import React, { useEffect, useRef, useState } from "react";
import s from "./CardList.module.css";

const CardList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${s.cardList} ${isVisible ? s.visible : ""}`}
    >
      {[1, 2, 3].map((item) => (
        <div className={s.card} key={item}>
          Lorem ipsum dorade bakig till geosylig postmodem.
        </div>
      ))}
    </div>
  );
};

export default CardList;
