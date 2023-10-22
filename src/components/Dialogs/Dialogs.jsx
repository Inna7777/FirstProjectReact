import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={styles.message}>{props.messag}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Ivan" },
  ];

  let dialogsElements=[
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
  ]
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Have are you" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Goodbay" },
    { id: 5, message: "hi" },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}

        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Masha" id="4" />
        <DialogItem name="Ivan" id="5" /> */}
      </div>
      <div className={styles.messages}>
        {/* <Message messag={messagesData[0].message} />
        <Message messag={messagesData[1].message} />
        <Message messag={messagesData[2].message} />
        <Message messag={messagesData[3].message} />
        <Message messag={messagesData[4].message} /> */}
      </div>
    </div>
  );
};
export default Dialogs;
