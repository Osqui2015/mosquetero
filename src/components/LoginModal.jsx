import { useContext } from "react"
import { useState } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth"

const LoginModal = ({show, handleClose, handleCloseLoginAndOpenSignUp}) => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameInput = (evt) => {
    setUsernameError('')
    setUsername(evt.target.value)
  }

  const handlePasswordInput = (evt) => {
    setPasswordError('')
    setPassword(evt.target.value)
  }

  const handleForgotPassword = () => {
    handleClose();
    navigate("/forgot-password");
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

    const successLogin = await login(username, password, setUsernameError)

    if (successLogin) {
      setUsername('')
      setPassword('')
      setUsernameError('')
      setPasswordError('')
      handleClose()
      navigate("/")
    }
  }

  const validate = () => {
    let ok = true;
    if (username === "") {
      setUsernameError("Por favor escriba su nombre de usuario");
      ok = false;
    } else {
      setUsernameError("");
    }

    if (password.length < 6) {
      setPasswordError("Porfavor ingresa una contraseña que tenga al menos 6 caracteres");
      ok = false;
    } else {
      setPasswordError("")
    }

    return ok;
  }

  return (
    <Modal show={show} size="lg" fullscreen="sm-down" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">Inicio de Sesión</Modal.Title>
      </Modal.Header>
      <Row className="align-items-stretch">
        <Col className="d-none d-sm-flex">
          <Modal.Body
            className="bg-login-modal text-light"
            style={{
              backgroundImage: 'url("/images/login-bg.png")',
            }}
          >
            <div className="p-5">
              <h1 className="font-poppins text-primary">Rshow</h1>
              <p>
                Inicia sesion y compra tu anticipada con descuento y accede a
                contenido exclusivo de tus artistas favoritos.
              </p>
            </div>
          </Modal.Body>
        </Col>
        <Col>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formLoginUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  onInput={handleUsernameInput}
                  value={username}
                  type="username"
                  placeholder="Ingresar Nombre de usuario"
                  isInvalid={usernameError !== ''}
                />
                {usernameError !== "" && (<Form.Control.Feedback type="invalid">{usernameError}</Form.Control.Feedback>)}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  onInput={handlePasswordInput}
                  value={password}
                  type="password"
                  placeholder="Ingresar contraseña"
                  isInvalid={passwordError !== ''}
                />
                {passwordError !== "" && (<Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>)}
              </Form.Group>

              <div className="text-end">
                <p>
                  <Button variant="link" onClick={handleForgotPassword}>
                    ¿Olvidaste tu contraseña?
                  </Button>
                </p>
                <p>
                  ¿Sos nuevo?{" "}
                  <Button
                    variant="link"
                    onClick={handleCloseLoginAndOpenSignUp}
                  >
                    Registrate aqui
                  </Button>
                </p>

                <Button variant="primary" onClick={handleSubmit}>
                  Enviar
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Col>
      </Row>
    </Modal>
  );
};

export default LoginModal;