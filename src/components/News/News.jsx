import React from "react";
import style from './News.module.css'
import  {useState} from "react";


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
  
 
const [likes, setLikes] = useState(0)
const [word, setWord] = useState("Приложение работает")
const [value, setValue] = useState('Tekst in input')

 function increment(){
    setLikes(likes +1)
 }

 function decrement(){
    setLikes(likes -1)
 }

function working() {
    (word === "Приложение работает") ? setWord("Приложение не работает"): setWord("Приложение работает");
   
}

    return(
        <div className={style.new}>
            News;
            <div className={style.newImg}>
            <img src="https://w.forfun.com/fetch/b1/b1cf28df4d25b96617f69261f6c55832.jpeg?h=900&r=0.5" alt=""/>
            </div>
            <div className={style.name}>
                {ListName}
            </div>
            <h1>{likes}</h1>
            <div>{word}</div>
            <h1>{value}</h1>
            <input type = 'text'
             value={value} 
             onChange = {event => setValue(event.target.value)}/>
            <button onClick= {working}>кнопка</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default News;