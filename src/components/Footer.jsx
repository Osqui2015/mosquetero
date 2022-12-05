import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink, Link } from "react-router-dom";
import { SiFacebook, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div bg="dark" variant="dark" className="footercont mt-auto">
      <div className="container">
        <Row>
          <Col xs={12} md={3}>
            <Link to="/">
              <img
                alt=""
                src="/logo.png"
                height="30"
                className="img-logo-footer "
              />{" "}
            </Link>
          </Col>
          <Col xs={12} md={3}>
            {" "}
            <NavLink
              className="nav-link nav-item mt-1 nav-link-menu"
              to="/Contacto"
            >
              Contacto
            </NavLink>            
            <NavLink
              className="nav-link nav-item mt-1 nav-link-menu"
              to="/Terminos"
            >
              Terminos y Condiciones
            </NavLink>
          </Col>
          <Col xs={12} md={3}>
            <NavLink
              className="nav-link nav-item mt-1 nav-link-menu"
              to="/Nosotros"
            >
              Nosotros
            </NavLink>

            <NavLink
              className="nav-link nav-item mt-1 nav-link-menu"
              to="/BlogTwo"
            >
              Blog
            </NavLink>
          </Col>
          <Col xs={12} md={3}>
            <div className="d-flex divredesFooter ">
              <div className="divface mx-1">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <SiFacebook className="iconface" />
                  </i>
                </a>
              </div>

              <div className="divface mx-1">
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
            </div>
          </Col>
        </Row>
        <div className="divcopy mx-1">
          &copy; RSHOW {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
        </div>
      </div>
    </div>
  );
};

export default Footer;
