import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const nameRegExp = /^[a-zA-Z ]*$/;

const BuyTicketPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [creditnumber, setCreditNumber] = useState("");
  const [cvcnumber, setCVCNumber] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [creditNumberError, setCreditNumberError] = useState("");
  const [cvcNumberError, setCVCNumberError] = useState("");

  const handleEmailInput = (evt) => {
    setEmail(evt.target.value);
  };

  const handleNameInput = (evt) => {
    setName(evt.target.value);
  };

  const handleCreditNumberInput = (evt) => {
    setCreditNumber(evt.target.value);
  };

  const handleCVCNumberInput = (evt) => {
    setCVCNumber(evt.target.value);
  };

  const validate = () => {
    let ok = true;
    if (name === "") {
      setNameError("Por favor escriba su nombre y apellido");
      ok = false;
    } else {
      if (!nameRegExp.test(name.toLowerCase())) {
        setNameError("Por favor, ingresa un nombre con formato correcto");
        return ok;
      } else {
        setNameError("");
      }
    }

    if (email === "") {
      setEmailError("Por favor escriba su correo electronico");
      ok = false;
    } else {
      setEmailError("");

      if (!emailRegExp.test(email.toLowerCase())) {
        setEmailError(
          "Por favor, ingresa un email con formato correcto. Por ejemplo: johndoe@gmail.com"
        );
        return ok;
      } else {
        setEmailError("");
      }
    }

    if (creditnumber === "") {
      setCreditNumberError("Por favor escriba su número de tarjeta de crédito");
      ok = false;
    } else {
      setCreditNumberError("");
    }

    if (cvcnumber === "") {
      setCVCNumberError(
        "Por favor escriba su número de CVC que está al dorso de la tarjeta"
      );
      ok = false;
    } else {
      setCVCNumberError("");
    }
    return ok;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validate()) {
      setName("");
      setEmail("");
      setCreditNumber("");
      setCVCNumber("");

      alert("Su compra fue registrada con éxito");
    }
  };

  return (
    <Container className="py-5">
      <p className="display-6 text-success">Ingresa tus datos</p>
      <Row className="align-items-stretch">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contactFormName">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              placeholder="Juan Perez"
              minLength="10"
              maxLength="100"
              type="text"
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
              maxLength="256"
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
          <Form.Group className="mb-3" controlId="contactFormName">
            <Form.Label>Numero de Tarjeta de credito</Form.Label>
            <Form.Control
              placeholder="0000 0000 0000 0000"
              maxLength="16"
              type="number"
              value={creditnumber}
              onInput={handleCreditNumberInput}
              isInvalid={creditNumberError !== ""}
            />
            {creditNumberError !== "" && (
              <Form.Control.Feedback type="invalid">
                {creditNumberError}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="col-sm-4" controlId="monthFormName">
            <Form.Label>Mes</Form.Label>

            <select className="form-control" name="monthSelected">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </Form.Group>

          <Form.Group className="col-sm-4" controlId="yearFormName">
            <Form.Label>Año de vencimiento</Form.Label>

            <select className="form-control" name="yearSelected">
              <option>2022</option>
              <option>2023</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
            </select>
          </Form.Group>

          <Form.Group className="col-sm-4" controlId="contactFormName">
            <Form.Label>Numero de CVC</Form.Label>
            <Form.Control
              placeholder="000"
              maxLength="3"
              value={cvcnumber}
              type="number"
              onInput={handleCVCNumberInput}
              isInvalid={cvcNumberError !== ""}
            />
            {cvcNumberError !== "" && (
              <Form.Control.Feedback type="invalid">
                {cvcNumberError}
              </Form.Control.Feedback>
            )}
          </Form.Group>          
          <div className="d-flex justify-content-end mb-5">
            <Button className="btn mt-3" variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default BuyTicketPage;