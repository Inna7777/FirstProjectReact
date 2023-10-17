import React from "react";
import s from './Navbar.module.css'
const Navbar = ()=>{
    return <div className={s.nav}>
    <div className={s.item}>
      <a >Profile</a>
    </div>
    <div className={s.item}>
      <a  >Music</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a  >News</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a >Settings</a>
    </div>
  </div>
}
 export default Navbar;