import React from "react";

const Navbar = () =>  {
    return(
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
        <a href="../../index3.html" className="nav-link">Salir</a>
    </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt" />
        </a>
    </li>
    </ul>
</nav>

//Quede en la parte del video 12:38, video número 13
    );
}

export default Navbar;