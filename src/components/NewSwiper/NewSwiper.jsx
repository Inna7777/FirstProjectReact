import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFlip} from 'swiper/modules';
import style from "./NewSwiper.module.css"
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';


register();
const images = [
       
    { line: "/imges/picture/1.JPG", id: "1" },
    { line: "/imges/picture/2.JPG", id: "2" },
    { line: "/imges/picture/3.JPG", id: "3" },
    { line: "/imges/picture/4.JPG", id: "4" },
    { line: "/imges/picture/5.JPG", id: "5" },
    
]

const NewSwiper=(pr)=>{
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: true,
    pagination: true,
    effect: 'flip',
    grabCursor: true,
    pagination: true,
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-position: center;
            background-size: 40px;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }

          .swiper-button-prev {

          }

          .swiper-button-next {

          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
      `,
    ],
  };

  const mySwiper = new Swiper(swiperContainer, params);
}, []);

    return (
        <Swiper  effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]} ref={swiperRef} init="false" className={style.newslider}>
          {images.map((item) => (
            <SwiperSlide key={item.id} className={style.swsl}><img src={item.line} alt=""/></SwiperSlide>
         
          ))}
        </Swiper>
      );
    };
    
export default NewSwiper;
 