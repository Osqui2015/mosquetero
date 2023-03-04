import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contentError, setContentError] = useState("");

  const handleEmailInput = (evt) => {
    setEmail(evt.target.value);
  };

  const handleNameInput = (evt) => {
    setName(evt.target.value);
  };

  const handleContentInput = (evt) => {
    setContent(evt.target.value);
  };

  const validate = () => {
    let ok = true;
  
    if (name === "") {
      setNameError("Por favor escriba su nombre y apellido");
      ok = false;
    } else {
      setNameError("");
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

    if (content === "") {
      setContentError("Por favor escriba su consulta");
      ok = false;
    } else {
      setContentError("");
    }

    return ok;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validate()) {
      setName("");
      setEmail("");
      setContent("");

      alert("Su consulta fue enviada con éxito!");
    }
  };
  const notify = () => toast("Se envio tu mensaje!");

  return (
    <Container className="py-5">
      <p className="display-6 text-primary">Comunicate con RSHOW</p>
      <Row className="align-items-stretch">
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contactFormName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                placeholder="Juan Perez"
                value={name}
                onInput={handleNameInput}
                isInvalid={nameError !== ""}
              />
              {nameError !== "" && (
                <Form.Control.Feedback type="invalid">
                  {nameError}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactFormEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                placeholder="juan.perez@gmail.com"
                value={email}
                onInput={handleEmailInput}
                isInvalid={emailError !== ""}
              />
              {emailError !== "" && (
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactFormContent">
              <Form.Label>Dejanos tu consulta</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onInput={handleContentInput}
                isInvalid={contentError !== ""}
              />
              {contentError !== "" && (
                <Form.Control.Feedback type="invalid">
                  {contentError}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <div className="d-flex justify-content-end mb-5">
              <Button variant="primary" type="submit" onClick={notify}>
                Enviar
              </Button>
              <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </Form>
          <p className="text-muted">
            Estamos de Lunes a Viernes de 9:00 AM a 4:00 PM
          </p>
        </Col>
        <Col className="d-none d-sm-block bg-light">
          <div className="google-maps-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64912573.49076589!2d-48.817448999999996!3d6.776054200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1669241080068!5m2!1ses-419!2sar"
              width="600"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowFullscreen
              aria-hidden="false"
              tabindex="0"
              title="ubicacion"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
