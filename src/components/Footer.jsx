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

        <NavLink className="nav-link nav-item mt-1 nav-link-menu" to="/BlogTwo">BlogTwo</NavLink>

        </Col>
        <Col xs={12} md={3}><div class="d-flex divredesFooter ">
            <div class="divface mx-1">
              <Link to="https://www.facebook.com" target="_blank">
                <i><SiFacebook className='iconface'/></i>
              </Link>
            </div>
        
            <div class="divface mx-1"> 
              <Link to="https://www.instagram.com" target="_blank">
                <i><SiInstagram className='iconinst'/></i>
              </Link>
            </div>
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