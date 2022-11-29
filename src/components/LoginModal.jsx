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
        <Modal.Title  className="text-primary">Inicio de Sesión</Modal.Title>
      </Modal.Header>
      <Row className="align-items-stretch">
        <Col className="d-none d-sm-flex">
          <Modal.Body
            className="bg-login-modal text-light"
            style={{
              backgroundImage: 'url("/images/login-bg.png")'
            }}
          >
            <div className="p-5">
              <h1 className="font-poppins text-primary">Rshow</h1>
              <p>Inicia sesion y compra tu anticipada con descuento y accede a contenido exclusivo de tus artistas favoritos.</p>
            </div>
          </Modal.Body>
        </Col>
        <Col>
          <Modal.Body>
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
                <Form.Label>Contraseña</Form.Label>
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
          </Modal.Body>
        </Col>
      </Row>
      
    </Modal>
  )
}

export default LoginModal