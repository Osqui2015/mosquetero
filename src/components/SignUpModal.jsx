import axios from "axios";
import { useState } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const SignUpModal = ({show, handleClose}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('')

  const handleUsernameInput = (evt) => {
    setUsername(evt.target.value)
  }

  const handleEmailInput = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordInput = (evt) => {
    setPassword(evt.target.value);
  };

  const handlePasswordConfirmationInput = (evt) => {
    setPasswordConfirmation(evt.target.value);
  };

  const validate = () => {
    let ok = true;

    if (username === "") {
      setUsernameError("Por favor escriba su nombre de usuario");
      ok = false;
    } else {
      setUsernameError("");
    }

    if (email === "") {
      setEmailError("Por favor escriba su correo electronico");
      ok = false;
    } else {
      setEmailError("");

      if (!emailRegExp.test(email)) {
        setEmailError(
          "Por favor, ingresa un email con formato correcto. Por ejemplo: johndoe@gmail.com"
        );
        ok = false;
      } else {
        setEmailError("");
      }
    }

    if (password.length < 6) {
      setPasswordError(
        "Porfavor ingresa una contraseña que tenga al menos 6 caracteres"
      );
      ok = false;
    } else {
      setPasswordError("");
      if (password !== passwordConfirmation) {
        setPasswordConfirmationError("La confirmacion no coincide");
        ok = false;
      } else {
        setPasswordConfirmationError("");
      }
    }

    return ok;
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    if (!validate()) {
      return;
    }

    let successRegister = false;

    try {
      await axios.post('https://shows-9tkg.onrender.com/register', {
        username,
        email,
        password,
        role: 'user'
      })
      successRegister = true
    } catch (error) {
      alert(error)
    }

    if (successRegister) {
      setUsername("")
      setEmail("")
      setPassword("")
      setPasswordConfirmation("")

      alert("Su solicitud de registro fue enviada con éxito!")
      handleClose()
    }
  };

  return (
    <Modal show={show} size="lg" fullscreen="sm-down" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">Registro de usuario </Modal.Title>
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
              <h1 className="text-primary">Rshow</h1>
              <p>
                Registrate ,accede a los mejores shows y novedades de tus
                artistas favoritos.
              </p>
            </div>
          </Modal.Body>
        </Col>
        <Col>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formSignUpUsername">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                  onInput={handleUsernameInput}
                  value={username}
                  placeholder="Ingresar nombre de usuario"
                  isInvalid={usernameError !== ""}
                />
                {usernameError !== "" && (<Form.Control.Feedback type="invalid">{usernameError}</Form.Control.Feedback>)}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSignUpEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onInput={handleEmailInput}
                  value={email}
                  type="email"
                  placeholder="Ingresar Email"
                  isInvalid={emailError !== ""}
                />
                {emailError !== "" && (
                  <Form.Control.Feedback type="invalid">
                    {emailError}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSignUpPassword">
                <Form.Label>Constraseña</Form.Label>
                <Form.Control
                  onInput={handlePasswordInput}
                  value={password}
                  type="password"
                  placeholder="Ingresar contraseña"
                  isInvalid={passwordError !== ""}
                />
                {passwordError !== "" && (
                  <Form.Control.Feedback type="invalid">
                    {passwordError}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formSignUpPasswordConfirmation"
              >
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  onInput={handlePasswordConfirmationInput}
                  value={passwordConfirmation}
                  type="password"
                  placeholder="Ingresar contraseña"
                  isInvalid={passwordConfirmationError !== ""}
                />
                {passwordConfirmationError !== "" && (
                  <Form.Control.Feedback type="invalid">
                    {passwordConfirmationError}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <div className="text-end">
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

export default SignUpModal;