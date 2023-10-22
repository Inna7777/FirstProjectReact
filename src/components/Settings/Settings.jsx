import React from "react";
import style from './Settings.module.css'


const Settings = ()=>{

let picture = [
    {url:"https://goo.su/xQAY", id:'logo1'},
    {url: "https://goo.su/xQAY", id:'logo2'},
    {url:"https://goo.su/xQAY", id:'logo3'},
    {url:"https://goo.su/xQAY", id:'logo4'}
]
 const showPicture = picture.map((p,id)=>{
    return(
        <div>
            <img src={p.url} alt={id}/>
            <p>{p.id}</p>
        </div>
    )
 })
return(
    <div className={style.setting}>
        <img src ='https://www.comsigntrust.com/wp-content/uploads/2014/06/settingsP.png' alt=""/>  
        {showPicture}
    </div>
  
)

}

export default Settings;