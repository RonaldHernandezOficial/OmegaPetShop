import React from 'react';
import Navbar from '../componentes/Navbar';
import SidebarContainer from '../componentes/SidebarContainer';
import ContentHeader from '../componentes/ContentHeader';
import Footer from '../componentes/Footer';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div class="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                //Me quede en el video número 15, en el minuto 13:25
                <ContentHeader
                    titulo={"Dashboard"}
                    breadCrumb1={"Inicio"}
                />
        
                <section className='content'>
                    <div className='container-fluid'></div>
                        <div className='row'>

                            <div className='col-lg-3 col-6'>
                                <div className='small-box bg-info'>
                                    <div className='inner'>
                                        <h3>Proyectos</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className='icon'>
                                        <i className='fa fa-bag'/>
                                    </div>
                                    <Link to={"/proyectos-admin"} className='small-box-footer'>Ver proyectos <i className='fas fa-arrow-circle-right'/></Link>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Menu;
