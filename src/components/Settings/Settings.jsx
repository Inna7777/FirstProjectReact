import React, { useState } from "react";
import style from './Settings.module.css'
import NewSwiper from "../NewSwiper/NewSwiper";
let picture = [
    {url:"https://goo.su/xQAY", id:'logo1', name:"Inna"},
    {url: "https://goo.su/xQAY", id:'logo2'},
    {url:"https://goo.su/xQAY", id:'logo3'},
    {url:"", id:'logo4'}
]
let words =[
    "red","green","blue","yellow", 'black', "whate"
  ]
  const wordsArr = [
    { words: 'apple' },
    { words: 'banana' },
    { words: 'orange' },
  ];
  
const Settings = ()=>{


 const showPicture = picture.map((p, id, name)=>{
    return(
        <div>
            <img src={p.url} alt={p.id}/>
            {p.name}
            
           
        </div>
    )
 })

  
  const showWord = words.map((words) =>{
     return(
        <div >
            <p>{words}</p>
        </div>
     )
  })
  
  
 
  const showWordFruct = wordsArr.map(({words}) => {
    return (
      <div >
        <p>{words}</p>
       
      </div>
    );
  });
  
  const [text, deletText] = useState("Text")

  function setDelete (){
     deletText();
  }
  const [textToo, deleteTextInput] = useState('Hello')

  function setZero(){
     deleteTextInput("-");
  }

  

return(
    <div className={style.setting}>
        <img src ='https://www.comsigntrust.com/wp-content/uploads/2014/06/settingsP.png' alt=""/>  
        {showPicture}
    <div className={style.words}>
        {showWord}
        {showWordFruct}
    </div>
    <h1>{text}</h1>
    <button onClick={setZero}>delete</button>
    <input type = 'text' value={textToo} />
    <div>
               <NewSwiper/>
            </div>
    </div>
  
)

}

export default Settings;