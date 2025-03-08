import React from "react";
import styles from "./TokenCard.module.css";

const TokenCard = ({ icon, title, description, gradientClass }) => {
  return (
    <li className={`${styles.card} ${styles[gradientClass]}`}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <img src={icon} alt={title} className={styles.icon} />
        </div>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            praesent massa ullamcorper ultrices eu tortor...
          </p>
        </div>
      </div>
    </li>
  );
};

export default TokenCard;
