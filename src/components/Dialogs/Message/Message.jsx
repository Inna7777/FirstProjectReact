import React from "react";
import styles from "./../Dialogs.module.css";



const Message = (props) => {
  return <div className={styles.message}>{props.messag}</div>;
};

export default Message;
