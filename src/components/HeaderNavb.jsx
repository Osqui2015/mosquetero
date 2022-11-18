import React, { useState } from 'react'
import {Navbar,Container,Nav, Stack, Button} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import"../css/Archivo.css";

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

      <div class="d-flex ">
       <Link to="/">
          <img
          alt=""
          src="/facebook.png"
          // width="30"
          height="30"
   
        />{' '}
        </Link>
        <Link to="/">
          <img
          alt=""
          src="/instagram.png"
          // width="30"
          height="30"
        
   
        />{' '}
        </Link>
        </div>
      
      <Nav className="me-auto">
        <Stack direction="horizontal" className="gap-1">
          <Button onClick={handleOpenLogin}>Ingresar</Button>
          <Button onClick={handleOpenSignUp}>Registrarse</Button>
        </Stack>
      </Nav>


      </Container>
    </Navbar>
    <LoginModal show={showLogin} handleClose={handleCloseLogin} handleCloseLoginAndOpenSignUp={handleCloseLoginAndOpenSignUp} />
    <SignUpModal show={showSignUp} handleClose={handleCloseSignUp} />
    </React.Fragment>
  )
}

export default Header