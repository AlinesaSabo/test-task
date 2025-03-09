import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={Logo} className={styles.icon} />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#token-sale">Token Sale</a>
          </li>
          <li>
            <a href="#faqs">FAQ’s</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <Button variant="secondary">Get in Touch</Button>
      </nav>
    </div>
  );
};

export default Header;
