import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

 let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Ivan" },
  ];
let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Have are you" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Goodbay" },
    { id: 5, message: "hi" },
  ];
const Dialogs = (props) => {
 
  let dialogsElements = dialogs.map((dialog) => <DialogItem name = {dialog.name} id = {dialog.id} />);
 
  
   let messagesElement = messages.map((message =><Message messag={message.message} /> ))

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
        {messagesElement}
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
