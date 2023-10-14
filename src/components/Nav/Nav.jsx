import React from "react";
import s from './Nav.module.css'
const Nav = ()=>{
    return <div className={s.nav}>
    <div className={s.item}>
      <a href="k">Profile</a>
    </div>
    <div className={s.item}>
      <a >Music</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a >News</a>
    </div>
  </div>
}
 export default Nav;