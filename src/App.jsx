import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import HeaderNavb from './components/HeaderNavb';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Destacado from './components/Destacado';
import Contacto from './components/Contacto';



const App = () => {
  return (
    <div>
      
     
     
      
      <BrowserRouter>
      <HeaderNavb/>
      <Routes>
        <Route path='Login' element={<Login/>}/>
        <Route path='Destacado' element={<Destacado/>}/>
        <Route path='Contacto' element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>
      <Container />
      <Footer/>
    </div>
  )
}

export default App
