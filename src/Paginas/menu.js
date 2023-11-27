import React from "react";
import Navbar from "../componentes/Navbar";
import SidebarContainer from "../componentes/SidebarContainer";
import ContentHeader from "../componentes/ContentHeader";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";
import "../css/style.css";

const Menu = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
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
                    <h3>Tiendas</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-bag"></i>
                  </div>
                  <Link to={"/proyectos-admin"} className="small-box-footer">
                    Registra tus productos <i className="fas fa-arrow-circle-right"></i>
                  </Link>
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
                    Crear categoría <i className="fas fa-arrow-circle-right"></i>
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
      <Footer></Footer>
    </div>
  );
};

export default Menu;