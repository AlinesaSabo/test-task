import React from "react";
import s from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
import bgGradient from "../../assets/image/fon/bg-gradient-img.png";
import arrow from "../../assets/icon/arrow.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.left}>
          <img src={Logo} alt="Logo" className={s.logo} />
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <div className={s.inputContainer}>
            <input
              type="email"
              placeholder="Email Address"
              className={s.input}
            />
            <img src={arrow} alt="arrow" className={s.arrow} />
          </div>
          <p className={s.rights}>© 2021 GPD Holdings, LLC FinCEN MSB</p>
        </div>
        <div className={s.right}>
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
        </div>
        <p className={s.privacy}>Privacy Policy and Terms of Service</p>
      </div>
      <img src={bgGradient} alt="bgGradient" className={s.bgGradient} />
    </footer>
  );
};

export default Footer;
