import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import swal from "sweetalert2";
import APIInvoke from "../../utils/APIInvoke";


const VerPedidos = () => {
    const [ventas, setVentas] = useState([]);
    const userId = localStorage.getItem("id"); //Obtener el user del id, para las validaciones de usuario
    const nombreUser = localStorage.getItem("nombre");

    const { userId: idUser, nombreUser: nombreU } = useParams(); // Cambiado a "idUser" para evitar conflicto
    const tituloPag = `Listado de productos: ${nombreUser || "Usuario Desconocido"}`;

    const cargarPedidos = async () => {
        try {
            var response = await APIInvoke.invokeGET(`/Ventas?idU=${userId}`);
            console.log('Respuesta de la API:', response); 

            if (Array.isArray(response) && response.length > 0) {
                setVentas(response);
            } else {
                console.error('La respuesta de la API no contiene proyectos.');
            }
        } catch (error) {
            console.error('Error al cargar los proyectos:', error);
        }
    };

    const verificarExistenciaVenta = async (idVenta, userId) => {
        try {
          var response = await APIInvoke.invokeGET(`/Ventas?id=${idVenta}&userId=${userId}`);
          if (Array.isArray(response) && response.length > 0) {
            setVentas(response)
          }
        } catch (error) {
          console.error('Error al verificar la existencia de la tarea:', error);
        }
      };

      const eliminarVenta = async (e, idVenta) => {
        e.preventDefault();
        try {
          const productoExistente = await verificarExistenciaVenta(idVenta);
    
          if (productoExistente) {
            const response = await APIInvoke.invokeDELETE(`/Ventas/${idVenta}`);
    
            if (response) {
              const msg = "Producto Eliminado Correctamente";
              swal.fire({
                title: "Informacion",
                text: msg,
                icon: "success",
                confirmButtonText: "Ok",
              });
              cargarPedidos();
            } else {
              throw new Error("Error al eliminar el producto.");
            }
          } else {
            throw new Error("El producto no pudo ser encontrado o no tienes permisos.");
          }
        } catch (error) {
          console.error('Error al eliminar el producto:', error);
          const msg = "El producto no pudo ser eliminado";
          swal.fire({
            title: "Error",
            text: msg,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      };
    //<td><Link to={`/editarPedidos/${item.id}@${item.idP}@${item.nombreProd}@${item.nombre}@${item.direccion}@${item.telefono}`} className="btn btn-sm btn-primary">Editar</Link></td>
    //El código de arriba solo se pondra si Narly lo pide
    useEffect(() => {
        cargarPedidos();
    }, [userId, nombreU]);

    return ( 
        <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">

            <ContentHeader
                titulo={"Pedidos"}
                breadCrumb1={"Inicio"}
                breadCrumb2={"Pedidos"}
                ruta1={"/menu"}
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
                                    <th style={{ width: '10%' }}>#</th>
                                    <th style={{ width: '10%' }}># Producto</th>
                                    <th style={{ width: '10%' }}>Nombre Producto</th>
                                    <th style={{ width: '10%' }}>Nombre cliente</th>
                                    <th style={{ width: '10%' }}>Direccion</th>
                                    <th style={{ width: '10%' }}>Telefono</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ventas.map(item =>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.id}</td>
                                            <td>{item.nombreProd}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.direccion}</td>
                                            <td>{item.telefono}</td>
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

export default VerPedidos;