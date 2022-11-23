import React, { useState } from 'react'
import {Navbar,Container,Nav, Stack, Button} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import"../css/Archivo.css";
import {SiFacebook, SiInstagram} from "react-icons/si";


import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";


function Header() {

  const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    const handleOpenLogin = () => {
      setShowLogin(true)
    }

    const handleCloseLogin = () => {
      setShowLogin(false)
    }

    const handleOpenSignUp = () => {
      setShowSignUp(true)
    }

    const handleCloseSignUp = () => {
      setShowSignUp(false)
    }

    const handleCloseLoginAndOpenSignUp = () => {
      setShowLogin(false)
      setShowSignUp(true)
    }

  return (
  <React.Fragment>
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
            <div class="divlogo navbar-brand">
              <Link to="/">
                <img alt="" src="/logo.png" height="30" class="img-logo" />{' '}
              </Link>
            </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className='basic d-flex justify-content-start'>

         <Nav>
          <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/">Home</NavLink>
          <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/Contacto">Contacto</NavLink>
          <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/Destacado">Destacado</NavLink>
          <div class="container-fluid searchBar d-flex align-content-center">
            <div class="input-group">
                <input type="text" class="form-control form-control-sm" placeholder="Buscá tu evento"  aria-describedby="button-addon2" size="14"></input>
                <button class="btn btn-warning btn-botones" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
            </div>
          </div>

          <div class="d-flex divredes me-2">
            <div class="divface mx-2">
              <a href="https://www.facebook.com" target="_blank" rel='noreferrer'>
             <i> <SiFacebook className='iconface'/></i>
            </a>
            </div>
        
            <div class="divface mx-2"> 
              <a href="https://www.instagram.com" target="_blank" rel='noreferrer'>
              <i ><SiInstagram className='iconinst'/></i>
              </a>
            </div>
           </div>

          <div class="div-btn-Ing-Reg">
            <Stack direction="horizontal" className="gap-2">
              <Button onClick={handleOpenLogin} className="buttIngresar">Ingresar</Button>
              <Button onClick={handleOpenSignUp} className="buttRegistrarse">Registrarse</Button>
            </Stack>
          </div>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>


    <LoginModal show={showLogin} handleClose={handleCloseLogin} handleCloseLoginAndOpenSignUp={handleCloseLoginAndOpenSignUp} />
    <SignUpModal show={showSignUp} handleClose={handleCloseSignUp} />


  </React.Fragment>
);
}

export default Header