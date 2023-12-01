import React from "react";
import APIInvoke from "../../utils/APIInvoke";
import { useEffect, useState } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainerClie from "../../componentes/SidebarContainerClientes";
import { Link, useParams } from "react-router-dom";

const VerTiendas = () => {
    const [tiendas, setTiendas] = useState([]);
    const userId = localStorage.getItem("id");
    const nombreUser = localStorage.getItem("nombre");

    useEffect(() => {
    const cargarTiendas = async () => {
        try {
        const response = await APIInvoke.invokeGET(`/Productos?userId=${userId}`);
        // Filtra los productos para mostrar solo los del usuario actual
        console.log("Respuesta de la API:", response);

        if (Array.isArray(response) && response.length > 0) {
            setTiendas(response);
        } else {
            console.error("La respuesta de la API no contiene tiendas.");
        }
        } catch (error) {
        console.error("Error al cargar las tiendas:", error);
        }
    };

    cargarTiendas();
    }, []);

    return (
    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainerClie></SidebarContainerClie>
    <div className="content-wrapper">
    <ContentHeader
            titulo={"Listado de Tiendas"}
            breadCrumb1={"Inicio"}
            breadCrumb2={"Listado de Tiendas"}
            ruta1={"/menuClientes"}
        />
    <div className="card-body">
        <table className="table table-bordered">
        <thead>
            <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Ver Productos</th>
            <th>Comprar Productos</th>
            </tr>
        </thead>
        <tbody>
            {tiendas.map((tiendaU) => (
            <tr key={tiendaU.id}>
                <td>{tiendaU.idU}</td>
                <td>{tiendaU.nombreU}</td>
                <td> <Link to={`/productosClientes/${tiendaU.idU}@${tiendaU.nombreU}`} className="btn tbn-sm btn-danger">Ver productos</Link></td>
                <td> <Link to={`/comprarProductos/${tiendaU.idU}@${tiendaU.nombreU}`} className="btn btn-sm btn-primary">Comprar productos</Link></td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
    <Footer></Footer>
    </div>
    );
};

export default VerTiendas;