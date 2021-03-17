import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/scss/includes/header.scss";

function Header() {
    return (
        <header className="header container">
            <ul className="menu">
                <li>
                    <NavLink exact to="/">Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/auth">Авторизоваться</NavLink>
                </li>
                <li>
                    <NavLink to="/registration">Зарегестрироваться</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;
