import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
 import {NavLink} from 'react-router-dom';

function Header() {
    
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">RSHOW</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink  className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/Login">Login</NavLink>
            <NavLink className="nav-link" to="/Contacto">Contacto</NavLink>
            <NavLink className="nav-link" to="/Destacado">Destacado</NavLink>
            <div class="container-fluid">
            <form className='mt-4'>
            <label> {" "} Buscar : <input type="text"  name='inputText'/> {" "} </label>
            <button type='submit' className='btn btn-warning mx-2'><i class="bi bi-search"></i></button>
        </form>
            </div>
            </Nav>
        </Container>
      </Navbar>
  )
}

export default Header