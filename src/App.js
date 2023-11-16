import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/auth/login';
import Menu from './Paginas/menu'
import CrearCuenta from './Paginas/auth/crearCuenta';
import ProyectosAdmin from './Paginas/proyectos/ProyectosAdmin';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element = {<Login/>}/>
          <Route path='/menu' exact element = {<Menu/>}/>
          <Route path='/crearCuenta' exact element = {<CrearCuenta/>}/>
          <Route path='/proyectos-admin' exact element = {<ProyectosAdmin/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
