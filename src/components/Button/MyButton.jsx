import React from "react";
import style from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style.myBtn} ${props.className || ""} `}
    >
      {props.children}
    </button>
  );
};

export default MyButton;
