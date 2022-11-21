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
   
<Navbar bg="dark" variant="dark">
    <Container>
      <Link to="/">
        <img
          alt=""
          src="/logo.png"
          // width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Link>
        
      <Nav className="me-auto">
        <NavLink  className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/Contacto">Contacto</NavLink>
        <NavLink className="nav-link" to="/Destacado">Destacado</NavLink>
      </Nav>
            
      <div className="container-fluid searchBar d-flex align-content-center">
        <form>
          <label> {" "} Buscar : <input type="text"  name='inputText'/> {" "} </label>
          <button type='submit' className='btn btn-warning'><i className="bi bi-search"></i></button>
        </form>
      </div>

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <div class="divlogo navbar-brand">
              <Link to="/">
                <img alt="" src="/logo.png" height="30" class="img-logo" />{' '}
              </Link>
            </div>
        </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

          <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/">Home</NavLink>
    
          <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/Contacto">Contacto</NavLink>

          <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/Destacado">Destacado</NavLink>

          <div class="container-fluid searchBar d-flex align-content-center">

            <div class="input-group" size="sm">
                <input type="text" class="form-control" placeholder="Buscá tu evento"  aria-describedby="button-addon2"></input>
                <button class="btn btn-warning btn-botones" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
            </div>
          </div>


          
          <div class="d-flex divredes me-2">
            <div class="divface mx-1">
              <Link to="https://www.facebook.com" target="_blank">
             <i> <SiFacebook className='iconface'/></i>
            </Link>
            </div>
        

   
        />{' '}
        </Link>
        </div>
      
      <Nav className="me-auto">
        <Stack direction="horizontal" className="gap-1">
          <Button onClick={handleOpenLogin}>Ingresar</Button>
          <Button onClick={handleOpenSignUp}>Registrarse</Button>
        </Stack>
      </Nav>

            <div class="divface mx-1"> 
              <Link to="https://www.instagram.com" target="_blank">
              <i ><SiInstagram className='iconinst'/></i>
              </Link>
            </div>
          </div>


          <div class="divlogin">
            <Nav className="me-auto">
              <NavLink className="nav-link btn btn-warning btn-login" to="/Login">Login</NavLink>
            </Nav>
          </div>

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

    <LoginModal show={showLogin} handleClose={handleCloseLogin} handleCloseLoginAndOpenSignUp={handleCloseLoginAndOpenSignUp} />
    <SignUpModal show={showSignUp} handleClose={handleCloseSignUp} />
    </React.Fragment>
  )

);

}

export default Header