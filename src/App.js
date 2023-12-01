import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/auth/login';
import IniciarSesion from './Paginas/auth/iniciarSesion';
import Menu from './Paginas/menu';
import CrearCuenta from './Paginas/auth/crearCuenta';
import ProyectosAdmin from './Paginas/proyectoTienda/ProyectosAdmin';
import ProyectosCrear from './Paginas/proyectoTienda/ProyectosCrear';
import ProyectosEditar from './Paginas/proyectoTienda/ProyectosEditar';
import MenuClientes from './Paginas/MenuClientes';
import VerTiendasClientes from './Paginas/proyectoTienda/VerTiendas';
import VisualizarCategorias from './Paginas/proyectoCategorias/VisualizarCategorias';
import CrearCategoria from './Paginas/proyectoCategorias/CrearCategoria';
import EditarCategoria from './Paginas/proyectoCategorias/EditarCategoria';
import VerPedidos from './Paginas/proyectoPedidos/verPedidos';
import TareasAdmin from './Paginas/proyectoTienda/TareasAdmin';
import TareasCrear from './Paginas/proyectoTienda/TareasCrear';
import TareasEditar from './Paginas/proyectoTienda/TareasEditar';
import EditarPedidos from './Paginas/proyectoPedidos/EditarPedidos';
import ComprarProductos from './Paginas/proyectoClientes/ComprarProductos';
import VerProductos from './Paginas/proyectoClientes/VerProductos';
import VerProductosClientes from './Paginas/proyectoClientes/VerProductosClientes';
import CrearCuentaAdministrador from './Paginas/auth/crearCuentaAdministrador';
import VerPedidosCliente from './Paginas/proyectoClientes/verPedidosCliente';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/'  element = {<IniciarSesion/>}/>
          <Route path='/login'  element = {<Login/>}/>
          <Route path='/menu'  element = {<Menu/>}/>
          <Route path='/menuClientes'  element = {<MenuClientes/>}/>
          <Route path='/crearCuenta'  element = {<CrearCuenta/>}/>
          <Route path='/crearCuentaAdministrador'  element = {<CrearCuentaAdministrador/>}/>
          <Route path='/proyectos-admin'  element = {<ProyectosAdmin/>}/>
          <Route path='/proyectos-crear'  element = {<ProyectosCrear/>}/>
          <Route path='/VerTiendas'  element = {<VerTiendasClientes/>}/>
          <Route path='/proyectos-editar/:idTienda'  element = {<ProyectosEditar/>}/>
          <Route path='/visualizarCategorias'  element = {<VisualizarCategorias/>}/>
          <Route path='/crearCategorias'  element = {<CrearCategoria/>}/>
          <Route path="/editarCategorias/:idCategoria"  element={<EditarCategoria/>}/>
          <Route path="/verPedidos"  element={<VerPedidos/>}/>
          <Route path="/verPedidosCliente"  element={<VerPedidosCliente/>}/>
          <Route path="/editarPedidos/:idPedido"  element={<EditarPedidos/>}/>
          <Route path="/tareas-admin/:idProyecto"  element={<TareasAdmin/>}/>
          <Route path="/tareas-crear/:idProyecto"  element={<TareasCrear/>}/>
          <Route path="/tareas-editar/:idProyecto"  element={<TareasEditar/>}/>
          <Route path="/comprarProductos/:idVenta"  element={<ComprarProductos/>}/>
          <Route path="/verProductos"  element={<VerProductos/>}/>
          <Route path="/productosClientes/:idProyecto"  element={<VerProductosClientes/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
