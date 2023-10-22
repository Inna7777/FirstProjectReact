import React from "react";
import style from './News.module.css'


const News = (props) => {
let namesArray=[
    {imy:"Inna", id:1}, 
    {imy:"Nadya", id:2},
    {imy: 'Vadim',id:3}
]
 const ListName = namesArray.map(({imy, id})=>{
    return(
        <div>
            <p>{imy}{id}</p> 
        </div>
    )
 })

    return(
        <div className={style.new}>
            News;
            <div className={style.newImg}>
            <img src="https://w.forfun.com/fetch/b1/b1cf28df4d25b96617f69261f6c55832.jpeg?h=900&r=0.5" alt=""/>
            </div>
            <div className={style.name}>
                {ListName}
            </div>
        </div>
    )
}

export default News;