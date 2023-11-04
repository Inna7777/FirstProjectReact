import React from "react";
import style from "./SwiperConstructor.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SwiperConstructor=(props)=>{


    return (
        <Swiper navigation modules={[Navigation, Pagination]} className={style.slider} >
          {props.slider.map((item) => (
            <SwiperSlide key={item.id} >{item}</SwiperSlide>
          ))}
        </Swiper>
      );
    };
    
export default SwiperConstructor;