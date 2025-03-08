import React from "react";
import s from "./Button.module.css";

const Button = ({ children, variant = "primary", onClick }) => {
  return (
    <button className={`${s.button} ${s[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
