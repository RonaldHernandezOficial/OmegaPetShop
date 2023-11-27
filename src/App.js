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
          <Route path='/' exact element = {<IniciarSesion/>}/>
          <Route path='/login' exact element = {<Login/>}/>
          <Route path='/menu' exact element = {<Menu/>}/>
          <Route path='/menuClientes' exact element = {<MenuClientes/>}/>
          <Route path='/crearCuenta' exact element = {<CrearCuenta/>}/>
          <Route path='/crearCuentaAdministrador' exact element = {<CrearCuentaAdministrador/>}/>
          <Route path='/proyectos-admin' exact element = {<ProyectosAdmin/>}/>
          <Route path='/proyectos-crear' exact element = {<ProyectosCrear/>}/>
          <Route path='/VerTiendas' exact element = {<VerTiendasClientes/>}/>
          <Route path='/proyectos-editar/:idTienda' exact element = {<ProyectosEditar/>}/>
          <Route path='/visualizarCategorias' exact element = {<VisualizarCategorias/>}/>
          <Route path='/crearCategorias' exact element = {<CrearCategoria/>}/>
          <Route path="/editarCategorias/:idCategoria" exact element={<EditarCategoria/>}/>
          <Route path="/verPedidos" exact element={<VerPedidos/>}/>
          <Route path="/verPedidosCliente" exact element={<VerPedidosCliente/>}/>
          <Route path="/editarPedidos/:idPedido" exact element={<EditarPedidos/>}/>
          <Route path="/tareas-admin/:idProyecto" exact element={<TareasAdmin/>}/>
          <Route path="/tareas-crear/:idProyecto" exact element={<TareasCrear/>}/>
          <Route path="/tareas-editar/:idProyecto" exact element={<TareasEditar/>}/>
          <Route path="/comprarProductos/:idVenta" exact element={<ComprarProductos/>}/>
          <Route path="/verProductos" exact element={<VerProductos/>}/>
          <Route path="/productosClientes/:idProyecto" exact element={<VerProductosClientes/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
