import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Destacado from './components/Destacado';
import Contacto from './components/Contacto';

import Nosotros from './components/Nosotros';
import Terminos from './components/Terminos';

import './App.scss';
import Layout from './components/Layout';
import HomePage from './pages/home/HomePage';
import ForgotPasswordPage from './pages/forgotPassword/ForgotPasswordPage';


const App = () => {
  return ( 
  <div>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/destacado' element={<Destacado/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path='Nosotros' element={ <Nosotros/> }/>
        <Route path='Terminos' element={<Terminos/>}/>
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
          <Container />
          <Footer />
        </BrowserRouter>{*/}
    </div>

)}


export default App
