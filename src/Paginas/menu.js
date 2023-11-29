import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import SidebarContainer from "../componentes/SidebarContainer";
import ContentHeader from "../componentes/ContentHeader";
import Footer from "../componentes/Footer";
import APIInvoke from "../utils/APIInvoke";

const Menu = () => {
  const [tiendas, setProyectos] = useState([]);
  const userId = localStorage.getItem("id");
  const userNombre = localStorage.getItem("nombre");
  const navigate = useNavigate(); // Cambia a useNavigate

  const listItemStyle = {
    fontSize: "20px",
    marginBottom: "10px",
  };

  const cargarTiendas = async () => {
    try {
      const response = await APIInvoke.invokeGET(`/Usuarios?id=${userId}&userNombre=${userNombre}`);
      console.log('Respuesta de la API:', response);

      if (Array.isArray(response) && response.length > 0) {
        const tiendaPropia = response.find(tienda => tienda.id === userId);

        if (tiendaPropia) {
          setProyectos([tiendaPropia]);
        } else {
          console.error('El usuario no es propietario de ninguna tienda.');
          // Redirige a una página de acceso denegado o realiza otra acción según tus requisitos
          navigate('/menu');
        }
      } else {
        console.error('La respuesta de la API no contiene tiendas válidas.');
      }
    } catch (error) {
      console.error('Error al cargar las tiendas:', error);
    }
  };

  useEffect(() => {
    cargarTiendas();
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="body content-wrapper">
        <ContentHeader
          titulo={"Panel de tienda"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Panel de tienda"}
          ruta1={"/menu"}
        />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-8">
                <div className="small-box bg-red">
                  <div className="inner">
                    <h3>Bienvenido</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-bag"></i>
                  </div>
                  {tiendas.length > 0 &&
                    tiendas.map((item) => (
                      <div key={item.id} className="nav-item" style={listItemStyle}>
                        <Link to={`/tareas-admin/${item.id}@${item.nombre}@${item.direccion}`} className="nav-link">
                          <i className="nav-icon fas fa-hammer" />
                          <p>Productos</p>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-7 col-8">
                <div className="small-box bg-green">
                  <div className="inner">
                    <h3>Categoría</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-laptop"></i>
                  </div>
                  <Link to={"/visualizarCategorias"} className="small-box-footer">
                    Ver Categorías <i className="fas fa-arrow-circle-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-8">
                <div className="small-box bg-purple">
                  <div className="inner">
                    <h3>Pedidos</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-truck"></i>
                  </div>
                  <Link to={"/verPedidos"} className="small-box-footer">
                    Ver pedidos <i className="fas fa-arrow-circle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
