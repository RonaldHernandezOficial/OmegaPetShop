import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../node_modules/admin-lte/dist/img/AdminLTELogo.png';
import MenuClientes from "./HomeClientes";

const SidebarContainerClientes = () => {
    return ( 
        <aside className="main-sidebar sidebar-dark-primary elevation-4 bg-primary">
        <Link to={"/menuClientes"} className="brand-link">
            <img
                src={Logo}
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">OmegaPetShop</span>
        </Link>
        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                    &nbsp;
                </div>
                <div className="info">
                    <Link to={"/menuClientes"} className="d-block text-dark">
                        Menu principal
                    </Link>
                </div>
            </div>

            <MenuClientes></MenuClientes>
        </div>
    </aside>
    );
}

export default SidebarContainerClientes;