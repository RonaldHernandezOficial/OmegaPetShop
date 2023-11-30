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

    const { userId: idUser, nombreUser: nombreUsuario } = useParams(); // Cambiado a "idUser" para evitar conflicto

    useEffect(() => {
    const cargarTiendas = async () => {
        try {
        const response = await APIInvoke.invokeGET(`/Productos?userId=${userId}&nombreUser=${nombreUser}`);
        // Filtra los productos para mostrar solo los del usuario actual
        const productosUsuario = response.filter(item => item.userId === idUser);
        const productosUsuarioN = response.filter(item => item.nombreUser === nombreUsuario);
        setTiendas(productosUsuario);
        setTiendas(productosUsuarioN);
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
            <th>Opciones</th>
            <th>Comprar</th>
            </tr>
        </thead>
        <tbody>
            {tiendas.map((tienda) => (
            <tr key={tienda.id}>
                <td>{tienda.id}</td>
                <td>{tienda.nombreU}</td>
                <td> <Link to={`/productosClientes/${tienda.id}@${tienda.nombre}`} className="btn tbn-sm btn-danger">Ver productos</Link></td>
                <td> <Link to={`/comprarProductos/${tienda.id}@${tienda.nombre}`} className="btn btn-sm btn-primary">Comprar productos</Link></td>
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