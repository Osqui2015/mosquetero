import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import {
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter
} from "reactstrap"
import Carousel from '../../components/Carousel';
import Card from 'react-bootstrap/Card';


const ShoppingCartPage = () => {
  
  return (
    
    <Container className="py-5">
      <div>
    <Carousel/>
    </div>
      <Row className="align-items-stretch">
      <p className="display-6 text-danger">
        Compra tus entradas
      </p>
      </Row>
      <Row className="align-items-stretch">
        <Col>
        <Card className='cardnosotros'>
        <Card.Img variant="top" src="/ShoppingCart.jpg" />
        <Card.Body>
          <Card.Title>Lucas Sugo-Luna Park Platea Lateral</Card.Title>
        </Card.Body>
        {}
      </Card>
        </Col>
        <Col className="d-none d-sm-block bg-light">
        
        </Col>
      </Row>
    </Container>
  )
}

export default ShoppingCartPage