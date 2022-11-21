import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink,Link} from 'react-router-dom';
import {SiFacebook, SiInstagram} from "react-icons/si";



const Footer = () => {
  return (
    <div bg="dark" variant="dark" expand="lg" className='footercont'>
      <Container bg="dark" variant="dark" expand="lg" className='footercont'>
      <Row>
        <Col md>
        <Link to="/">
                <img alt="" src="/logo.png" height="30" class="img-logo" />{' '}
          </Link>
        </Col>
        <Col md> <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/Contacto">Contacto</NavLink>
        <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/Terminos">Terminos y Condiciones</NavLink>
        </Col>
        <Col md><NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/Blog">Blog</NavLink>
        <NavLink className="nav-link nav-item mx-1 nav-link-menu" to="/Nosotros">Nosotros</NavLink>
        </Col>
        <Col md><div class="d-flex divredes me-2">
            <div class="divface mx-1">
              <a href="https://www.facebook.com" target="_blank"> 
                <i><SiFacebook className='iconface'/></i>
                </a>
            </div>
        
            <div class="divface mx-1"> 
              <Link to="https://www.instagram.com" target="_blank">
                <i><SiInstagram className='iconinst'/></i>
              </Link>
            </div>
          </div>
      </Col>
      </Row>
          <div className='divcopy'>
            &copy; RSHOW {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
          </div>
      </Container>
    </div>
    );
    }

export default Footer