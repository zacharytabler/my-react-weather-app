import { CITIES } from "../../data/constants";
import { HOME } from "../../data/constants";
import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.header__container}>
      <div className={style.nav__container}>
        <NavLink to={HOME}>Home</NavLink>
        <NavLink to={CITIES}>Cities</NavLink>
      </div>
    </div>
  );
};

export default Header;
