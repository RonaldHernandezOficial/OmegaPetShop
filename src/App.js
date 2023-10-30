import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/auth/login';
import Menu from './Paginas/menu'

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element = {<Login/>}/>
          <Route path='/' exact element = {<Menu/>}/>

        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
