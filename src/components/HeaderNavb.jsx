import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import"../css/Archivo.css";

function Header() {
    
  return (
   
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
            
      <div class="container-fluid searchBar d-flex align-content-center">
        <form>
          <label> {" "} Buscar : <input type="text"  name='inputText'/> {" "} </label>
          <button type='submit' className='btn btn-warning'><i class="bi bi-search"></i></button>
        </form>
      </div>

      <div class="d-flex ">
        <Link to="/">
        <img
          alt=""
          src="/facebook.png"
          // width="30"
          height="30"
   
        />{' '}
        </Link>
        <Link to="https://www.facebook.com">
        <img
          alt=""
          src="/instagram.png"
          // width="30"
          height="30"
   
        />{' '}
        </Link>
        </div>
      
      <Nav className="me-auto">
      <NavLink className="nav-link" to="/Login">Login</NavLink>
      </Nav>


      </Container>
    </Navbar>
  )
}

export default Header