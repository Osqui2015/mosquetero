import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const HomePage = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleEmailInput = (evt) => {
    setEmail(evt.target.value)
  }

  const validate = () => {
    let ok = true;

    if (email === "") {
      setEmailError("Por favor escriba su correo electronico");
      ok = false;
    } else {
      setEmailError("");

      if (!emailRegExp.test(email)) {
        setEmailError("Por favor, ingresa un email con formato correcto. Por ejemplo: johndoe@gmail.com");
        ok = false;
      } else {
        setEmailError("");
      }
    }

    return ok;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (validate()) {
      // Enviar Datos...
      setEmail("")

      alert("Las instrucciones para recuperar tu contraseña fueron enviadas a tu email!")
    }
  }

  return (
    <Container>
      <p className="display-6 text-primary text-center">
        ¿Olvidaste tu contraseña?
      </p>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form className='mb-5'>
            <Form.Group className="mb-3" controlId="formForgotPasswordEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onInput={handleEmailInput}
                value={email}
                placeholder="Ingresar Email"
                isInvalid={emailError !== ""}
              />
              {emailError !== "" && (<Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>)}
              <Form.Text muted>
                Te enviaremos las instrucciones a tu email
              </Form.Text>
            </Form.Group>

            <div className="text-end">
              <Button
                variant="primary"
                onClick={handleSubmit}
              >
                Enviar
              </Button>
            </div>
          </Form>

          <div className="text-center">
            <h1 className="text-primary">Rshow</h1>
            <p>
              Para su seguridad necesitamos que porporcione el email con el que se registró.
              En caso de que no pueda recuperar la clave a través de esta opción, puede enviar un mensaje a traves de <Link to="/contacto">Contáctenos</Link>.
              Si no ve el mail en su bandeja de entrada, intente buscando en la bandeja de correos no deseados.
            </p>
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default HomePage