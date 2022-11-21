import { useState } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"

const SignUpModal = ({show, handleClose}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleEmailInput = (evt) => {
    setEmail(evt.target.value)
  }

  const handlePasswordInput = (evt) => {
    setPassword(evt.target.value)
  }

  const handlePasswordConfirmationInput = (evt) => {
    setPasswordConfirmation(evt.target.value)
  }

  return (
    <Modal show={show} size="lg" fullscreen="sm-down" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="align-items-stretch">
          <Col className="d-none d-sm-block bg-light">
            <div className="p-5">
              <h1>Rshow</h1>
              <p>Inicia sesion y compra tu anticipada con descuento y accede a contenido exclusivo de tus artistas favoritos.</p>
            </div>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formSignUpEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onInput={handleEmailInput}
                  value={email}
                  type="email"
                  placeholder="Ingresar Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSignUpPassword">
                <Form.Label>Constraseña</Form.Label>
                <Form.Control
                  onInput={handlePasswordInput}
                  value={password}
                  type="password"
                  placeholder="Ingresar contraseña"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSignUpPasswordConfirmation">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  onInput={handlePasswordConfirmationInput}
                  value={passwordConfirmation}
                  type="password"
                  placeholder="Ingresar contraseña"
                />
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" onClick={handleClose}>
                  Enviar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default SignUpModal