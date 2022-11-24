import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')

  const handleEmailInput = (evt) => {
    setEmail(evt.target.value)
  }

  return (
    <Container>
      <p className="display-6">
        ¿Olvidaste tu contraseña?
      </p>
      <Row className="align-items-stretch">
        <Col className="d-none d-sm-block bg-light">
          <div className="p-5">
            <h1>Rshow</h1>
            <p>Inicia sesion y compra tu anticipada con descuento y accede a contenido exclusivo de tus artistas favoritos.</p>
          </div>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formForgotPasswordEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onInput={handleEmailInput}
                value={email}
                type="email"
                placeholder="Ingresar Email"
              />
              <Form.Text muted>
                Te enviaremos las instrucciones a tu email
              </Form.Text>
            </Form.Group>

            <div className="text-end">
              <Button variant="primary">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

    </Container>
  )
}

export default ForgotPasswordPage