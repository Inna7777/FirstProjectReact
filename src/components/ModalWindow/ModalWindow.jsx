import React, { useState } from "react";
import MyButton from "../Button/MyButton";
import { Dialog } from "@headlessui/react";
import style from "./ModalWindow.module.css";
import DialogForm from "../DialogForm/DialogForm";
import MyListBox from "../ListBox/ListBox";

const ModalWindow = (props) => {
  const [isopen, setIsOpen] = useState(false);
/* Диалоговое окно*/
  return (
    <div>
      {/* <MyButton onClick={() => setIsOpen(true)}>Open</MyButton>
      <Dialog open={isopen} onClose={() => setIsOpen(false)}>
        <div className={style.dialogWindow}>
          <Dialog.Panel className={style.popup}>
            <Dialog.Title> МОЕ окно </Dialog.Title>
            <div>Text, text, text</div>
            <button onClick={() => setIsOpen(false)}>Закрыть</button>
          </Dialog.Panel>
        </div>
      </Dialog> */}
      
        <MyButton onClick={() => setIsOpen(true)}>Open modal window</MyButton>
        <div>
          <DialogForm open={isopen} onClose={() => setIsOpen(false)}>
            <p>Ура!!!!!!!!!!!!!!!!!!</p>
                <MyListBox/>
          </DialogForm>
        </div>
      
    </div>
  );
};

export default ModalWindow;
