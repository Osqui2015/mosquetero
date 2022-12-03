import React from "react";
import { Route, Routes } from "react-router-dom";

import Destacado from "./pages/home/Destacado";

import Nosotros from "./pages/home/Nosotros";
import Terminos from "./pages/home/Terminos";
import Contacto from "./pages/contact/ContactPage";

import "./App.scss";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPasswordPage";
import BlogTwo from "./pages/home/BlogTwo";
import ShoppingCartPage from "./pages/shoppingCart/ShoppingCartPage";
import Publicity from "./pages/home/Publicity";
import BuyTicketPage from "./pages/buyTicket/BuyTicketPage";

const App = () => {
  // aramar estructura de login(la logica y el estado que indica si esta logueado o no)
  // 2. pasar por props a todas las partes que necesiten saber si esta logueado), home page, container,cards, card
  //armar toda la estructura de los like, es lo mismo que el carrito.
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/destacado" element={<Destacado />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Terminos" element={<Terminos />} />
          <Route path="/BlogTwo" element={<BlogTwo />} />
          <Route path="/ShoppingCart" element={<ShoppingCartPage />} />
          <Route path="/BuyTicket" element={<BuyTicketPage />} />
          <Route path="/Publicity" element={<Publicity />} />
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
  );
};

export default App;
