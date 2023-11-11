import React from "react";
import style from "./SliderShow.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const images = [
  { line: "/imges/picture/1.JPG", id: "1" },
  { line: "/imges/picture/2.JPG", id: "2" },
  { line: "/imges/picture/3.JPG", id: "3" },
  { line: "/imges/picture/4.JPG", id: "4" },
  { line: "/imges/picture/5.JPG", id: "5" },
];

const labels =[
    {title:"Один",  id:"a1"},
    {title:"Два",  id:"a2"},
    {title:"Три",  id:"a3"}
]

const SliderShow = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={style.mySlider}
      >
        {images.map((el) => (
          <SwiperSlide id={el.id}>
            <img src={el.line} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <form>
        <label>
            Текстовое поле с ограничением ввода
            <input type="text" maxLength={4} />
        </label><br/>
        <label>
            Поле  для введения  цифр с ограничением ввода
            <input type="number" minLength={2} />
        </label><br/>
        <label>
            Кнопка радио
            <input type="radio"  />
        </label><br/>
        <label>
            Кнопка checkbox
            <input type="checkbox"  /><br/>
        </label>
        <label>
            Кнопка ползунок
            <input type="range"  min="0" max="50"  step='3'/><br/>
        </label>
        <label>
            Текстовое поле с фокусом
            <input type="text" autoFocus="on" />
            Поле с автозаполнением
            <input type="password" autocomplete="off" />
        </label><br/>
        <label>
            Кнопка 
            <input type="submit"  /><br/>
        </label>
        <label>
            Кнопка цвета
            <input type="color"  /><br/>
        </label>
        <label>
            Кнопка картинка
            <input type="image" src="public\imges\picture\10.JPG" alt="img" height={30} width={30} /><br/>
        </label>
        Кнопка  сброса
        <input type="reset" />

        <label>
           
            <input type="tel" autocomplete="on"   /><br/>
        </label>
        <div>
            {labels.map((value)=> <label for={value.id} className={style.container}><input type="checkbox"  id={value.id} className={style.inputs} />{value.title}<span className={style.marks}></span></label>)}
        </div>
      </form>
      
    </>
  );
};

export default SliderShow;
