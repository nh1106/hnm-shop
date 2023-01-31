import './App.css';
import {Routes , Route, Link ,useNavigate, Outlet } from "react-router-dom"
import Product from './page/Product';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


function App() { 
  const [authenticate,setAuthenticate] = useState(); // false => 로그인 x  true => 로그인 o
  useEffect(() =>{
      console.log(authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<Product></Product>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} authenticate={authenticate}></Login>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
