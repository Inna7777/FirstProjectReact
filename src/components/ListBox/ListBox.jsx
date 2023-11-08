import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import style from "./ListBox.module.css";

const menu = [
  { id: 1, tariff: "Vip тариф" },
  { id: 2, tariff: "эконом тариф" },
  { id: 1, tariff: "планировка" },
];

const MyListBox = (props) => {
  const [selectedTarif, setTarif] = useState(menu[0]);

  return (
    <>
      <Listbox value={selectedTarif} onChange={setTarif}>
        <Listbox.Button>{selectedTarif.tariff} </Listbox.Button>
        <Listbox.Options className={style.listbox}>
          {menu.map((el) => (
            <Listbox.Option key={el.id} value={el} className={style.list}>
              {el.tariff}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
};

export default MyListBox;
