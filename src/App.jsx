import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Destacado from './components/Destacado';

import Destacado from './pages/home/Destacado';
import Contacto from './pages/home/Contacto';

import Nosotros from './pages/home/Nosotros';
import Terminos from './pages/home/Terminos';


import './App.scss';
import Layout from './components/Layout';
import HomePage from './pages/home/HomePage';
import ForgotPasswordPage from './pages/forgotPassword/ForgotPasswordPage';
import BlogTwo from './pages/home/BlogTwo';
import ContactPage from './pages/contact/ContactPage';

const App = () => {
  return ( 
  <div>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/destacado' element={<Destacado/>}/>
        <Route path='/contacto' element={<ContactPage/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path='/Nosotros' element={ <Nosotros/> }/>
        <Route path='/Terminos' element={<Terminos/>}/>
        
        <Route path='/BlogTwo' element={<BlogTwo/>}/>
      </Route>
    </Routes>  
    
       {/*}  <BrowserRouter>
          <HeaderNavb />
            <Routes>
              <Route path='Login' element={<Login/>}/>
              <Route path='Destacado' element={<Destacado/>}/>
              <Route path='Contacto' element={<Contacto/>}/>
              <Route path='Nosotros' element={<Nosotros/>}/>
              <Route path='Terminos' element={<Terminos/>}/>
              <Route path='Blog' element={<Blog/>}/>            
            </Routes>
          <Container /> prueba Dos
          <Footer />
        </BrowserRouter>{*/}
    </div>

)}


export default App
