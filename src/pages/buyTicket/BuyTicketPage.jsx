import { useRef } from "react";
import { Container,Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";

import * as Yup from "yup";

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
                creditnumber: Yup.number()
                .min(16,'El número de tarjeta de crédito debe tener 16 números')
                .required('El campo número de tarjeta de crédito es requerido'),
                cvcnumber:Yup.number()
                .min(3,'El Campo CVC no debe tener mas de 3 dígitos')
                .required('El campo CVC es requerido'),
                monthSelected:  Yup.number()
                .required('El campo mes es requerido'),
                yearSelected: Yup.number()
                .required('El campo año es requerido'),
                
});

const BuyTicketPage = () => {

  const form = useRef();

  const onSubmit = ({ resetForm }, e) => {
    emailjs
      .sendForm(
        "service_q2hc72l",
        "template_90fw8cw",
        form.current,
        'bxv6pJBdM3qZ_otFC'
      )
      .then(
        (result) => {
          alert("Compra realizada con éxito, recibiras un correo de confirmación de tu compra", result.text);
        },
        (error) => {
          alert("No se registró tu compra", error.text);
        }
      )
      .then(formik.resetForm());

    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      creditnumber:"",
      monthSelected:"1",
      yearSelected:"2023",
      cvcnumber:""
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Container className="py-5">
      <p className="display-6 text-success">Ingresa tus datos</p>
      <form ref={form} onSubmit={formik.handleSubmit}>
      <label className="form-label">Nombre</label>
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
      <label className="form-label">Número de Tarjeta de Credito</label>
      <input
        className="form-control"
        type="number"
        name="creditnumber"
        id="creditnumber"
        placeholder="0000 0000 0000 0000"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.creditnumber}
      />
      {formik.touched.creditnumber && formik.errors.creditnumber ? (
        <div className="f-red mt-1">{formik.errors.creditnumber}</div>
      ) : null}
      <div className="col-sm-4">
      <label htmlFor="monthSelected">Mes de Vencimiento</label>
      <select className="form-control" name="monthSelected" onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.monthSelected}>
      <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
      </select>
      </div>
      <div className="col-sm-4">
      <label htmlFor="yearSelected">Año de vencimiento</label>
      <select className="form-control" name="monthSelected" onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.monthSelected}>
           <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
        </select>
        </div>
        <label htmlFor="cvcnumber">CVC</label>
        <input
        className="form-control"
        type="number"
        name="cvcnumber"
        id="cvcnumber"
        placeholder="000"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cvcnumber}
      />
      {formik.touched.cvcnumber && formik.errors.cvcnumber ? (
        <div className="f-red mt-1">{formik.errors.cvcnumber}</div>
      ) : null}
      
      <div className="d-flex justify-content-end mb-5">
            <Button className="btn mt-3" variant="primary" type="submit">
              Comprar
            </Button>
          </div>
      </form>
    </Container>
  );
};

export default BuyTicketPage;