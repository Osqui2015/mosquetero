import { useRef } from "react";
import { Container,Button, Col, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";

import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  name:Yup.string()
                  .max(40,'El nombre debe tener 40 caracteres')
                  .matches(
                    /^[a-zA-Z]+([a-zA-Z ]+)*$/,
                    "Solo letras, puede contener espacios solo entre nombres."
                  )
                  .required('El campo nombre es requerido'),
                email:Yup.string()
                  .email('El formato de correo electrónico no es correcto')
                  .required('El campo email es requerido'),
                content:Yup.string()
                  .max(200,'El mensaje debe tener 200 caracteres como máximo')
                  .matches(
                    /^[a-zA-Z]+([a-zA-Z ]+)*$/,
                    "Solo letras, puede contener espacios solo entre palabras."
                  )
                  .required('El campo consulta es requerido')
});

const ContactPage = () => {
    const form = useRef();

  const onSubmit = ({ resetForm }, e) => {
    emailjs
      .sendForm(
        "service_q2hc72l",
        "template_uj461yq",
        form.current,
        'bxv6pJBdM3qZ_otFC'
      )
      .then(
        (result) => {
          alert("Se envió tu consulta", result);
        },
        (error) => {
          alert("No se pudo enviar tu consulta", error.text);
        }
      )
      .then(formik.resetForm());

    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      content:""
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  const notify = () => toast("Se envio tu mensaje!");
  
  return (
    <Container className="py-5">
      <p className="display-6 text-primary">Comunicate con RSHOW</p>
      <Row className="align-items-stretch">
        <Col>
          <form ref={form} onSubmit={formik.handleSubmit}>
            <label className="form-label">Nombre y Apellido</label>
            <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="f-red mt-1">{formik.errors.name}</div>
      ) : null}
              
              <label className="form-label">E-mail</label>
      <input
        className="form-control"
        type="email"
        name="email"
        id="email"
        placeholder="ejemplo@dominio.com"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="f-red mt-1">{formik.errors.email}</div>
      ) : null}
            <label className="form-label">Dejanos tu consulta</label>
            <textarea
            id="content"
            name="content"
            className="form-control mb-2"
            placeholder="Escriba su mensaje"
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
      />
              {formik.touched.content && formik.errors.content ? (
        <div className="f-red mt-1">{formik.errors.content}</div>
      ) : null}
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
          </form>
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
