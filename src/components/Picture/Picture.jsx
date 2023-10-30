import React, { useState } from "react";
import style from "./Picture.module.css";
import MyButton from "../Button/MyButton";

const picture = [
  {
    id: "1",
    images: [
      { line: "/imges/picture/1.JPG", id: "f" },
      { line: "/imges/picture/2.JPG", id: "g" },
      { line: "/imges/picture/3.JPG", id: "h" },
      { line: "/imges/picture/4.JPG", id: "j" },
      { line: "/imges/picture/5.JPG", id: "g" },
      { line: "/imges/picture/6.JPG", id: "a" },
    ],
  },
  {
    id: "2",
    images: [
      { line: "/imges/picture/5.JPG", id: "n" },
      { line: "/imges/picture/2.JPG", id: "m" },
      { line: "/imges/picture/3.JPG", id: "c" },
    ],
  },
  {
    id: "3",
    images: [
      { line: "/imges/picture/4.JPG", id: "u" },
      { line: "/imges/picture/6.JPG", id: "t" },
    ],
  },
];

let btn = [
  { name: "Первый", id: "1" },
  { name: "Второй", id: "2" },
  { name: "Третий", id: "3" },
  { name: "Четвертый", id: "4" },
];

const ListPicture = (props) => {
  const [state, setState] = useState(null);

  function change(id) {
    setState(id);
    console.log(id);
  }

  const selectionArray = picture.find((item) => item.id === state)?.images || []; 


  return (
    <div>
      <div className={style.positionPicture}>
        
        {selectionArray.map((el) =><img src={el.line} alt={el.id}/>)}
      </div>
      <div className={style.myBtns}>
         {btn.map((item =>(<button onClick={() => change(item.id)}>{item.name}</button>)))}

         {btn.map((item => (
          <MyButton  onClick={() => change(item.id)}>{item.name}</MyButton>)))} 
      </div>
    </div>
  );
};

export default ListPicture;
