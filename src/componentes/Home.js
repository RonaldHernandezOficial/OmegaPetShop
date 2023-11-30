import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = () => {
    const [tiendas, setProyectos] = useState([]);
    const userId = localStorage.getItem("id");
    const userNombre = localStorage.getItem("nombre");
    const listItemStyle = {
        fontSize: "20px", // Tamaño de fuente más grande
        marginBottom: "10px", // Espacio entre elementos más grande
    };

    useEffect(() => {
        // Simulando la carga de datos de tiendas
        const tiendasCargadas = [
            { id: userId, nombre: userNombre}
        ];
        setProyectos(tiendasCargadas);
    }, []);
    
    return (
        <nav className="mt-2">
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                <li className="nav-item" style={listItemStyle}>
                    <Link to={"/menu"} className="nav-link">
                        <i className="nav-icon fas fa-home" />
                        <p>Inicio</p>
                    </Link>
                </li>
                {tiendas.length > 0 &&
    tiendas.map((item) => (
        <li key={item.id} className="nav-item" style={listItemStyle}>
            <Link to={`/tareas-admin/${item.id}@${item.nombre}@${item.direccion}`} className="nav-link">
                <i className="nav-icon fas fa-hammer" />
                <p>Productos</p>
            </Link>
        </li>
    ))}            
    <li className="nav-item" style={listItemStyle}>
                    <Link to={"/visualizarCategorias"} className="nav-link">
                        <i className="nav-icon fas fa-laptop" />
                        <p>Categorias</p>
                    </Link>
                </li>

                <li className="nav-item" style={listItemStyle}>
                    <Link to={"/verPedidos"} className="nav-link">
                        <i className="nav-icon fas fa-truck" />
                        <p>Pedidos</p>
                    </Link>
                </li>

                <li className="nav-item" style={listItemStyle}>
                    <Link to={"/"} className="nav-link">
                        <i className="nav-icon fas fa-user" />
                        <p>Crear Cuenta</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Home;