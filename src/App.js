import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/auth/login';
import Menu from './Paginas/menu'
import CrearCuenta from './Paginas/auth/crearCuenta';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/login' exact element = {<Login/>}/>
          <Route path='/' exact element = {<Menu/>}/>
          <Route path='/crearCuenta' exact element = {<CrearCuenta/>}/>

        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
