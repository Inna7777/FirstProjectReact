import React from "react";
import style from './News.module.css'


const News = () => {
    return(
        <div className={style.new}>
            News;
            <div className={style.newImg}>
            <img src="https://w.forfun.com/fetch/b1/b1cf28df4d25b96617f69261f6c55832.jpeg?h=900&r=0.5" alt=""/>
            </div>
        </div>
    )
}

export default News;