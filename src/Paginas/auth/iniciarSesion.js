import React from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import { Link } from "react-router-dom";


const IniciarSesion = () => {
    return (
        <div style={{ textAlign: 'center' }}>
        <div className="wrapper">
            <center>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Bienvenido a OmegaPetShop"}
                    breadCrumb1={"Login"}
                    breadCrumb2={"Crear Cuenta"}
                    ruta1={"/login"}
                />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-8">
                            <h2>¿Como vas a iniciar sesión?</h2>
                                <div className="small-box bg-red">
                                    <div className="inner">
                                        <h3>Administrador</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-hammer"></i>
                                    </div>
                                    <Link to={"/crearCuentaAdministrador"} className="small-box-footer">
                                        Crear Cuenta <i className="fas fa-arrow-circle-right"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-7 col-8">
                                <div className="small-box bg-orange">
                                    <div className="inner">
                                        <h3>Cliente</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <Link to={"/crearCuenta"} className="small-box-footer">
                                        Crear Cuenta <i className="fas fa-arrow-circle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                        <img src="https://media.tenor.com/ZJT4S4lpfpIAAAAd/perro-bailando.gif"
                        alt="GIF"
                        width="300" // Puedes ajustar el ancho según tus necesidades
                        height="200" // Puedes ajustar la altura según tus necesidades
                        style={{ float: 'left' }} // Agrega esta línea para alinear a la izquierda
                        /> 
                        </div>
                    </div>
                </section>
            </div>      
            </center>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default IniciarSesion;