<<<<<<< HEAD
import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import HeaderNavb from './components/HeaderNavb';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Destacado from './components/Destacado';
import Contacto from './components/Contacto';

=======
import { Route, Routes } from 'react-router-dom';
>>>>>>> c542a50 (session)

import './App.scss';
import Layout from './components/Layout';
import HomePage from './pages/home/HomePage';
import ForgotPasswordPage from './pages/forgotPassword/ForgotPasswordPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/destacado' element={<Destacado/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
    </Routes>
  )
}

export default App
