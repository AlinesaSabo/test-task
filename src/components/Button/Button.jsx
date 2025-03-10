import React from "react";
import s from "./Button.module.css";

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  return (
    <button
      className={`${s.button} ${s[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
