import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke.js";
import swal from "sweetalert";


const CrearCuenta = () => {
    const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: "",
    password: "",
    confirmar: "",
    rol: 'cliente' //El rol solo se cambiara si se necesita cambiarlo, es el bd.json
    });

    const { nombre, email, direccion, telefono, password, confirmar, rol } = usuario;

    const onChange = (e) => {
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
    });
    };

    useEffect(() => {
    document.getElementById("email").focus();
    }, [])

    const crearCuenta = async () => {

    const verificarExistenciaUsuario = async (email) => {
            try {
                const response = await APIInvoke.invokeGET(
                    `/Usuarios?email=${email}`
                );
                if (response && response.length > 0) {
                    return true; // El usuario ya existe
                }else{
                    return false; // El usuario no existe
                }

            } catch (error) {
                console.error(error);
                return false; // Maneja el error si la solicitud falla 
            }
        };

    if (password !== confirmar) {
        const msg = "Las contraseñas no coinciden.";
        swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
            confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
            },
        },
        });
    } else if (password.length < 6) {
        const msg = "Contraseña demasiado corta (debe ser mayor a 6 caracteres)";
        swal({
            title: 'Error',
            text: msg,
            icon: 'warning',
            buttons: {
                confirmar:{
                    text: 'Ok',
                    value: true,
                    visible: true,
                    className: 'btn btn-danger',
                    closeModal: true
                }
            }
        });
    } else {
        const usuarioExistente = await verificarExistenciaUsuario(email);     
        const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        direccion: usuario.direccion,
        telefono: usuario.telefono,
        password: usuario.password,
        rol: usuario.rol // Hay que asegurarse que se envie bien al servidor
        };                                          
        const response = await APIInvoke.invokePOST(`/Usuarios`, data);
        const mensaje = response.msg;

        if (usuarioExistente) {
            const msg = 'El usuario ya existe'
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
                const msg = "El usuario fue creado correctamente";
                swal({
                title: "Información",
                text: msg,
                icon: "success",  
                buttons: {
                    confirm: {
                    text: "Ok",
                    value: true,
                    visible: true,
                    className: "btn btn-danger",
                    closeModal: true,
                        }
                    }
                });

                setUsuario({
                    nombre: "",
                    email: "",
                    direccion: "",
                    telefono: "",
                    password: "",
                    confirmar: "",
                })
            }
        }
    }

    const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
    };

    return (
    <div className="hold-transition login-page">
        <div className="login-box">
        <div className="login-logo">
            <Link to={"#"}>
            <b>Crear</b> Cuenta
            </Link>
        </div>
        <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg">Ingrese los datos del usuario.</p>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                    required
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-user" />
                    </div>
                </div>
                </div>

                <div className="input-group mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                    </div>
                </div>
                </div>

                <div className="input-group mb-3">
                <input
                    type="string"
                    className="form-control"
                    placeholder="Dirección"
                    id="direccion"
                    name="direccion"
                    value={direccion}
                    onChange={onChange}
                    required
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-home"></span>
                    </div>
                </div>
                </div>

                <div className="input-group mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Telefono"
                    id="telefono"
                    name="telefono"
                    value={telefono}
                    onChange={onChange}
                    required
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-phone"></span>
                    </div>
                </div>
                </div>

                <div className="input-group mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                    </div>
                </div>
                </div>

                <div className="input-group mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar contraseña"
                    id="confirmar"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChange}
                    required
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                    </div>
                </div>
                </div>
                <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                    Crear Cuenta
                </button>
                <Link to={"/login"} className="btn btn-block btn-danger">
                    Regresar al login
                </Link>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
        );
};

export default CrearCuenta;
