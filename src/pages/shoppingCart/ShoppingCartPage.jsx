import React, { useContext, useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';

import Tickets from "./Tickets";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { Carousels } from '../../components/Carousels';
import { AuthContext } from '../../contexts/auth';

const ShoppingCartPage = () => {
    const [cart, setCart] = useState([]);
  const [proof, setProof] = useState(0);

  const { userLoggedIn } = useContext(AuthContext);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setTimeout(() => {}, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    if (tempArr[ind].amount >= 10) tempArr[ind].amount = 10;
    setCart([...tempArr]);
  };
  
  return (
    
    <Container className="py-5">
      <div>
        <Carousels/>
      </div>
      <Row>
        <p className="display-6 text-danger">Compra tus entradas</p>
      </Row>
      <Row>
        <Col className="col col-12 col-md-6">
          <Tickets handleClick={handleClick} setProof={setProof} />
          <Link to={proof !== 0 && "/BuyTicket"}>
                    {userLoggedIn() ? (
                      <button
                          type="button"
                          disabled={proof === 0 && true}
                          className="btn mx-2 mt-3 text-white"
                          style={{ backgroundColor: "#FE6848" }}
                          onClick={{setProof}}
                        >
                          Comprar
                        </button>
                    ) : (
                      <div className="badge bg-danger text-wrap mt-4" style={{ width: "18rem" }}>
                        <h3> Inicia Sesión POR FAVOR...!! </h3>
                      </div>
                    )}            
          </Link>
        </Col>
        <Col className="col col-12 col-md-6">
          <Cart
            cart={cart}
            setCart={setCart}
            handleChange={handleChange}
            setProof={setProof}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default ShoppingCartPage
