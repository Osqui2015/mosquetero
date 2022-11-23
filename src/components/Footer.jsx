import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink,Link} from 'react-router-dom';
import {SiFacebook, SiInstagram} from "react-icons/si";
import { Button, Stack } from 'react-bootstrap';



const Footer = () => {
  return (
    <div   className='bg-dark py-3 justify-content-center justify-items-center text-align-center'>
      <Container>
        <Row>
          <Col xs={12} md={3}>
        <Link to="/">
                <img alt="" src="/logo.png" height="30" class="img-logo-footer " />{' '}
          </Link>
        </Col>
        <Col xs={12} md={3}> <NavLink className="nav-link nav-item mt-1 nav-link-menu" to="/Contacto">Contacto</NavLink>
        <NavLink className="nav-link nav-item mt-1 nav-link-menu" to="/Terminos">Terminos y Condiciones</NavLink>
        </Col>
        <Col xs={12} md={3}>
        <NavLink className="nav-link nav-item mt-1 nav-link-menu" to="/Nosotros">Nosotros</NavLink>
        <NavLink className="nav-link nav-item mt-1 nav-link-menu" to="/Blog">Blog</NavLink>
        </Col>

        <Col xs={12} md={3}>
        <div class="d-flex justify-content-center">
           
           <Stack direction='horizontal' className='gap-2 justify-content-end'>
              <a href="https://www.facebook.com" target="_blank" rel='noreferrer'>
                <i><SiFacebook className='iconface'/></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel='noreferrer'>
                <i><SiInstagram className='iconinst'/></i>
                </a>
                </Stack>
          </div>
      </Col>
      </Row>
          <div className='divcopy mx-1'>
            &copy; RSHOW {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
          </div>
      </Container>
    </div>
    );
    }

export default Footer