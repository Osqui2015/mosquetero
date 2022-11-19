import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import HeaderNavb from './components/HeaderNavb';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Destacado from './components/Destacado';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Terminos from './components/Terminos';
import Blog from './components/Blog';



const App = () => {
  return (
    <div>
      
     
     
      
      <BrowserRouter>
      <HeaderNavb/>
      <Routes>
        <Route path='Login' element={<Login/>}/>
        <Route path='Destacado' element={<Destacado/>}/>
        <Route path='Contacto' element={<Contacto/>}/>
        <Route path='Nosotros' element={<Nosotros/>}/>
        <Route path='Terminos' element={<Terminos/>}/>
        <Route path='Blog' element={<Blog/>}/>
        
      </Routes>
      <Container />
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
