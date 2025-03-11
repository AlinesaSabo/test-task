import React from "react";
import s from "./Header.module.css";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <nav className={s.navbar}>
        <div className={s.logo}>
          <img src={Logo} className={s.icon} />
        </div>
        <ul className={s.navLinks}>
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
        <Button className={s.button}>Get in Touch</Button>
      </nav>
    </div>
  );
};

export default Header;
