import React from "react";
import style from "./SliderShow.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const images = [
       
    { line: "/imges/picture/1.JPG", id: "1" },
    { line: "/imges/picture/2.JPG", id: "2" },
    { line: "/imges/picture/3.JPG", id: "3" },
    { line: "/imges/picture/4.JPG", id: "4" },
    { line: "/imges/picture/5.JPG", id: "5" },
    
]

const SliderShow =() => {
       
    
    return(
        <Swiper  effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]} className={style.mySlider}>
            {images.map((el)=><SwiperSlide id={el.id}><img src= {el.line} alt="img"/></SwiperSlide>)}

        </Swiper>
    )

     
}

export default SliderShow;