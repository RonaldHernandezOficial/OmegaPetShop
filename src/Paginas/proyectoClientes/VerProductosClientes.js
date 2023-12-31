import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import SidebarContainerClientes from "../../componentes/SidebarContainerClientes";

const VerProductosClientes = () => {
    const userId = localStorage.getItem("id"); //Obtener el user del id, para las validaciones de usuario
    const nombreUser = localStorage.getItem("nombre");

    const [productos, setProductos] = useState([]);

    const { idProyecto } = useParams();
    let arreglo = idProyecto.split('@')
    const idTienda = arreglo[0]
    const nombreTienda = arreglo[1]
    const tituloPag = `Listado de productos: ${nombreTienda}`

    const cargarProductos = async () => {
        try {
            var response = await APIInvoke.invokeGET(`/productos?idU=${idTienda}`);
            console.log('Respuesta de la API:', response); // Verifica la respuesta

            if (Array.isArray(response) && response.length > 0) {
                setProductos(response);
            } else {
                console.error('La respuesta de la API no contiene proyectos.');
            }
        } catch (error) {
            console.error('Error al cargar los proyectos:', error);
        }
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    const eliminarProducto = async (e, idProducto, idUser) => { 
        e.preventDefault();
        const verificarExistenciaTarea = async (idProducto) => {
            try {
                const response = await APIInvoke.invokeGET(
                    `/productos?id=${idProducto}`
                );
                if (response && response.length > 0) {
                    return true; 
                }
                return false; 
            } catch (error) {
                console.error(error);
                return false;
            }
        };

        const productoExistente = await verificarExistenciaTarea(idProducto);

        if (productoExistente) {
            const response = await APIInvoke.invokeDELETE(`/productos/${idProducto}?idU=${userId}`);
            const msg = "Producto Eliminado Correctamente";
            new swal({
                title: "Informacion",
                text: msg,
                icon: "success",
                buttons: {
                    confirmar: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: "btn btn-prymari",
                        closeModal: true,
                    },
                },
            });
            cargarProductos();
        } else {
            const msg = "El producto No Pudo Ser Eliminado";
            new swal({
                title: "Error",
                text: msg,
                icon: "error",
                buttons: {
                    confirmar: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: "btn btn-danger",
                        closeModal: true,
                    },
                },
            });
        }
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainerClientes></SidebarContainerClientes>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={tituloPag}
                    breadCrumb1={" Listado de proyectos"}
                    breadCrumb2={"Productos"}
                    ruta1={"/menuClientes"}
                />
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '15%' }}>#</th>
                                        <th style={{ width: '10%' }}>Nombre Tienda</th>
                                        <th style={{ width: '10%' }}>Nombre Producto</th>
                                        <th style={{ width: '10%' }}>Precio</th>
                                        <th style={{ width: '10%' }}>Categoria</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productos.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.nombreU}</td>
                                                <td>{item.nombre}</td>
                                                <td>{item.precio}</td>
                                                <td>{item.idC}</td>
                                            </tr>
                                        )}
                                </tbody>


                            </table>
                        </div>
                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default VerProductosClientes;