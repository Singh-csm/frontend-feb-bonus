import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App';
import HomePage from './components/HomePage';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import CreateStudent from './components/CreateStudent';
import Header from './components/navBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
  {/* <Route  path='/' element={<App />} /> */}
  {/* <Route path='/' element={<HomePage/>} /> */}
  <Route path='/' element={<HomePage/>}/>
{/* <Route path='/:studentId' element={<HomePage/>}/> */}
{/* </Route> */}
  <Route path='/login' element={<Login/>} />
  <Route path='/User' element={<CreateUser/>} />
  <Route path='/createStudent' element={<CreateStudent/>} />
  </Routes>
    
  </BrowserRouter>
);


