import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>  {
    return(
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
    <li className="nav-item">
        <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
        <Link to={"/login"} className="nav-link">Salir</Link>
    </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link to={"#"} className="nav-link" data-widget="fullscreen"  role="button">
        <i className="fas fa-expand-arrows-alt" />
        </Link>
    </li>
    </ul>
</nav>

//Quede en la parte del video 12:38, video número 13
    );
}

export default Navbar;