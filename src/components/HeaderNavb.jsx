import React, { useState, useContext } from "react";
import { Navbar, Container, Nav, Stack, Button, Seeker } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "../css/Archivo.css";
import { SiFacebook, SiInstagram } from "react-icons/si";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { AuthContext } from '../contexts/auth';
import { usePosts } from "../context/postContext";

function Header() {
 
  const {getPost} = usePosts()

  const { userLoggedIn, loggedUser, logout } = useContext(AuthContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [query, setQuery] = useState ('')

  const handleSearchInput = (evt) =>{
    setQuery(evt.target.value)
  }

  const handleSearchBtn = () => {
    getPost(query)
  }

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleOpenSignUp = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  const handleCloseLoginAndOpenSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  return (
    <>
      <Navbar className="bg-dark d-none d-md-block mx-0 d-flex pt-3">
        <Container className="p-0">
          {/* LOGO */}
          <div className="d-flex justify-content-center">
            <div>
              <Link to="/">
                <img alt="" src="/logo.png" height="30" class="img-logo" />{" "}
              </Link>
              {/* </Nav.Link> */}
            </div>
          </div>

          {/* BUSCADOR */}
          <div className="d-flex">
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder="Busca tu evento"
              aria-describedby="button-addon2"
              size="20"
              value={query}
              onInput = {handleSearchInput}
            ></input>
            <button
              class="btn btn-search btn-botones"
              type="button"
              id="button-addon2"
              onClick={handleSearchBtn}
            >
              <i class="bi bi-search"></i>
            </button>
          </div>

          <div className="menu-derecha d-flex align-items-center">            
            <div class="divface no-redes mx-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  {" "}
                  <SiFacebook className="iconface" />
                </i>
              </a>
            </div>
            <div class="divface no-redes mx-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <SiInstagram className="iconinst" />
                </i>
              </a>
            </div>

            <div class="mx-2">
              {userLoggedIn() ? (
                <Stack direction="horizontal" className="gap-2">
                  <span className="text-light">Hola: {loggedUser().username}</span>
                  <Button onClick={logout} className="buttSalir">Logout</Button>
                </Stack>
              ) : (
                <Button onClick={handleOpenLogin} className="buttIngresar">Login</Button>
              )}
            </div>
          </div>          
          <LoginModal
            show={showLogin}
            handleClose={handleCloseLogin}
            handleCloseLoginAndOpenSignUp={handleCloseLoginAndOpenSignUp}
          />
          <SignUpModal show={showSignUp} handleClose={handleCloseSignUp} />
        </Container>
      </Navbar>
      <Navbar className=" bg-dark py-1" expand="md">
        <Container className="">
          <Navbar.Brand className="d-md-none">
            <Link to="/">
              <img alt="" src="/logo.png" height="30" class="img-logo" />{" "}
            </Link>
          </Navbar.Brand>
          <span className="bg-burger">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </span>
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <div className="links-header">
              <Nav className="me-auto" id="headerLinks">
                <NavLink className="nav-link mx-1 nav-link-menu" to="/">
                  Home
                </NavLink>
                <NavLink
                  className="nav-link mx-1 nav-link-menu"
                  to="/Destacado"
                >
                  Destacado
                </NavLink>
                <NavLink className="nav-link mx-1 nav-link-menu" to="/Nosotros">
                  Nosotros
                </NavLink>
                <NavLink className="nav-link mx-1 nav-link-menu" to="/Blogtwo">
                  Blog
                </NavLink>
                <NavLink className="nav-link mx-1 nav-link-menu" to="/Contacto">
                  Contacto
                </NavLink>
                <div className="div d-flex">
                  <div class=" d-lg-none">
                    <Stack direction="horizontal" className="gap-2">
                      <Button
                        onClick={handleOpenLogin}
                        className="buttIngresar"
                      >
                        Login
                      </Button>
                    </Stack>
                  </div>                  
                </div>
                <div className="d-flex d-lg-none my-2">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Buscá tu evento"
                    aria-describedby="button-addon2"
                    size="20"
                  ></input>
                  <button
                    class="btn btn-search btn-botones"
                    type="button"
                    id="button-addon2"
                  >
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* //   <Navbar bg="danger" expand='lg' className='div-Navbar'>
    //   <Navbar.Collapse id="basic-navbar-nav">
    //   <Container className='container-navbar2'   id="basic-navbar-nav">
    //       <NavLink className="nav-link mx-1 nav-link-menu" to="/">Home</NavLink>
    //       <NavLink className="nav-link mx-1 nav-link-menu" to="/Contacto">Contacto</NavLink>
    //       <NavLink className="nav-link mx-1 nav-link-menu" to="/Destacado">Destacado</NavLink>  
    //   </Container>
    // </Navbar.Collapse>
    // </Navbar> */}
    </>
  );
}

export default Header;