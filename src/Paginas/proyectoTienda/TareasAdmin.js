import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const TareasAdmin = () => {
  const [productos, setProductos] = useState([]);
  const userId = localStorage.getItem("id"); //Obtener el user del id, para las validaciones de usuario
  const nombreUser = localStorage.getItem("nombre");

  const { idProyecto } = useParams();
  const { userId: idUser, nombreUser: nombreUsuario } = useParams(); // Cambiado a "idUser" para evitar conflicto

  const tituloPag = `Listado de productos: ${nombreUser || "Usuario Desconocido"}`;

  const cargarProductos = async () => {
    try {
      const response = await APIInvoke.invokeGET(`/productos?userId=${userId}`);
      console.log('Respuesta de la API:', response);

      if (Array.isArray(response) && response.length > 0) {
        // Filtra los productos para mostrar solo los del usuario actual
        const productosUsuario = response.filter(item => item.userId === idUser);
        const productosUsuarioN = response.filter(item => item.nombreUser === nombreUsuario);
        setProductos(productosUsuario);
        setProductos(productosUsuarioN);
      } else {
        console.error('La respuesta de la API no contiene productos válidos.');
      }
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  };

  const verificarExistenciaTarea = async (idProducto) => {
    try {
      const response = await APIInvoke.invokeGET(`/productos?id=${idProducto}&userId=${userId}`);
      if (response && response.length > 0) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error al verificar la existencia de la tarea:', error);
      return false;
    }
  };

  const eliminarProducto = async (e, idProducto) => {
    e.preventDefault();
    try {
      const productoExistente = await verificarExistenciaTarea(idProducto);

      if (productoExistente) {
        const response = await APIInvoke.invokeDELETE(`/productos/${idProducto}`);

        if (response) {
          const msg = "Producto Eliminado Correctamente";
          swal.fire({
            title: "Informacion",
            text: msg,
            icon: "success",
            confirmButtonText: "Ok",
          });
          cargarProductos();
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

  useEffect(() => {
    cargarProductos();
  }, [idUser, nombreUser]);

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={tituloPag}
          breadCrumb1={"Listado de proyectos"}
          breadCrumb2={"Tareas"}
          ruta1={"/proyectos-admin"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link to={`/tareas-crear/${idUser}@${nombreUser}`} className="btn btn-block btn-primary btn-sm">Crear producto</Link>
              </h3>
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
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}>#</th>
                    <th style={{ width: '10%' }}>id</th>
                    <th style={{ width: '10%' }}>Nombre</th>
                    <th style={{ width: '10%' }}>Precio</th>
                    <th style={{ width: '10%' }}>Tienda</th>
                    <th style={{ width: '10%' }}>Categoria</th>
                    <th style={{ width: '15%' }}>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.idU}</td>
                      <td>{item.nombre}</td>
                      <td>{item.precio}</td>
                      <td>{item.nombreU}</td>
                      <td>{item.idC}</td>
                      <td>
                        <Link to={`/tareas-editar/${item.id}@${item.nombre}@${item.precio}@${item.idU}@${item.idC}@${nombreUsuario}`} className="btn btn-sm btn-primary">Editar</Link> &nbsp;&nbsp;
                        <button onClick={(e) => eliminarProducto(e, item.id)} className="btn btn-sm btn-danger">Borrar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TareasAdmin;
