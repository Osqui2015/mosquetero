import { useState } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const LoginModal = ({show, handleClose, handleCloseLoginAndOpenSignUp}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailInput = (evt) => {
    setEmail(evt.target.value)
  }

  const handlePasswordInput = (evt) => {
    setPassword(evt.target.value)
  }

  const handleForgotPassword = () => {
    handleClose()
    navigate("/forgot-password")
  }

  return (
    <Modal show={show} size="lg" fullscreen="sm-down" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Inicio de Sesión</Modal.Title>
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
              <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onInput={handleEmailInput}
                  value={email}
                  type="email"
                  placeholder="Ingresar Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Label>Constraseña</Form.Label>
                <Form.Control
                  onInput={handlePasswordInput}
                  value={password}
                  type="password"
                  placeholder="Ingresar contraseña"
                />
              </Form.Group>

              <div className="text-end">
                <p>
                  <Button variant="link" onClick={handleForgotPassword}>¿Olvidaste tu contraseña?</Button>
                </p>
                <p>
                  ¿Sos nuevo? <Button variant="link" onClick={handleCloseLoginAndOpenSignUp}>Registrate aqui</Button>
                </p>

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

export default LoginModal