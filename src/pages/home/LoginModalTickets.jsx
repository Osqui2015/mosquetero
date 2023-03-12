import React, { useState, useContext } from "react";

import { Modal, Button, Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom"

const LoginModal = () => {
  const { login } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      navigate("/shoppingCart")
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
    <>
      <Button variant="primary" onClick={handleShow}>
        <h5>Login</h5>
      </Button>
      <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
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
      </Modal>
    </>
  );
};

export default LoginModal;
