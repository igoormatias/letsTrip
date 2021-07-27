import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

import  "./styles.css"

export default function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link className="header__reserva">
        <div>
            <strong>Minhas reservas</strong>
            <span>0 reservas</span>
        </div>
      </Link>
    </header>
  );
}
