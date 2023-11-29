import React from "react";
import { useEffect, useState } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert2";



const TareasCrear = () => {

    const navigate = useNavigate();

    const [productos, setProductos] = useState({
        nombre: '',
        precio:'',
        idU:'',
        idC:''
    })

    const { nombre, idC , precio} = productos;



    const { idProyecto } = useParams();
    let arreglo = idProyecto.split('@')
    const idUsuario = arreglo[0]
    const nombreTienda = arreglo[1]
    const tituloPag = `Creación de productos: ${nombreTienda}`


    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])


    const onChange = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        })

    }

    const crearTarea = async () => {

        const data = {
            idT: idUsuario,
            idC:productos.idC,
            nombre: productos.nombre,
            precio:productos.precio
        }

        const response = await APIInvoke.invokePOST('/productos', data);
        const idTarea = response.id;

        if (idTarea === '') {
            const msg = "La tarea no fue creada correctamente";
            new swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            navigate(`/tareas-admin/${idUsuario}@${nombreTienda}`)
            const msg = "La tarea fue creada correctamente";
            new swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });

        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearTarea()
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={tituloPag}
                    breadCrumb1={"Listado de tareas"}
                    breadCrumb2={"Creación"}
                    ruta1={`/tareas-admin/${idProyecto}`}
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
                            <form onSubmit={onSubmit} noValidate>
                                <div className="card-body">
                                <div className="form-group">
                                        <label htmlFor="nombre">Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese el nombre del producto" value={nombre} onChange={onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Precio:</label>
                                        <input type="text" className="form-control" id="precio" name="precio" placeholder="Ingrese el precio del producto" value={precio} onChange={onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idC">Categoría:</label>
                                        <br/>
                                        <select className="form-control" id="idC" name="idC"  value={idC} onChange={onChange} required class="selectpicker" data-style={"btn-success"} data-live-search="true">
                                            <option data-tokens="ketchup mustard">Alimentos</option>
                                            <option data-tokens="mustard">Accesorios</option>
                                            <option data-tokens="frosting">Estética e higiene</option>
                                            <option data-tokens="ketchup mustard">Medicamentos</option>
                                            <option data-tokens="mustard">Snacks</option>
                                            <option data-tokens="frosting">Paseo</option>
                                            <option data-tokens="frosting">Juguetes</option>
                                            <option data-tokens="frosting">Placas</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">crear</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default TareasCrear;