import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import"../css/Archivo.css";



function Header() {
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
                <img alt="" src="/facebook.png" height="30"/>{' '}
              </Link>
            </div>
        
            <div class="divface mx-1"> 
              <Link to="https://www.instagram.com" target="_blank">
                <img alt="" src="/instagram.png" height="30"/>{' '}
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
);
}

export default Header