import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/pictures" activeClassName={s.activeLink}>Pictures</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/swiperpictures" activeClassName={s.activeLink}>SwiperPicture</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <NavLink to="/slidershow" activeClassName={s.activeLink}>SliderShow</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <NavLink to="/effect" activeClassName={s.activeLink}>Effect</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <NavLink to="/modalwindow" activeClassName={s.activeLink}>ModalWindou</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <NavLink to="/forms" activeClassName={s.activeLink}>Forms</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <NavLink to="/formreact" activeClassName={s.activeLink}>FormReactHook</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <NavLink to="/formreact2" activeClassName={s.activeLink}>FormReactHook2</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <NavLink to="/formreact3" activeClassName={s.activeLink}>FormReactHook3</NavLink>
        </div>
        
      
    </nav>
  ) 
}

export default Navbar;