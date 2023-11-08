import React, { useState } from "react";
import style from "./SwiperPicture.module.css";
import SwiperConstructor from "../SwiperConstructor/SwiperConstructor";
const images = [
  { line: "/imges/picture/1.JPG", id: "1" },
  { line: "/imges/picture/2.JPG", id: "2" },
  { line: "/imges/picture/3.JPG", id: "3" },
  { line: "/imges/picture/4.JPG", id: "4" },
  { line: "/imges/picture/5.JPG", id: "5" },
  { line: "/imges/picture/6.JPG", id: "6" },
];
let buttons = [
  { nam: "Первый", id: "1" },
  { nam: "Второй", id: "2" },
  { nam: "Третий", id: "3" },
  { nam: "все", id: "4" },
];
const SwiperPicture = () => {
  const [clic, SetImage] = useState(null);

  const currentImage = (id) => {
    if (id === "4") {
      SetImage("4");
    } else {
      const onePicture = images.find((item) => item.id === id);
      if (onePicture) SetImage(onePicture.line);
    }
  };

  const renderImages = () => {
    if (clic === "4") {
      return images.map((item) => <img key={item.id} src={item.line} alt="" />);
    } else {
      return [<img src={clic} alt="" />];
    }
  };

  return (
    <div>
      <div className={style.viewButton}>
        {buttons.map((el) => (
          <button onClick={() => currentImage(el.id)}>{el.nam}</button>
        ))}
      </div>
      <div className={style.divPucture}>
        <SwiperConstructor slider={renderImages()} />
      </div>
    </div>
  );
};

export default SwiperPicture;
