import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  //la funcion handle tiene que revisar si esta logueado o no, si esta logueado va hacer un fetch a la api para agregar
  //a favorito y sino tiene que hacer navigate a la pagina login paar qeu se loguee
  const handleLike = () => {};

  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top" alt="imagen.png" />
      <div className="card-body">
        <h5 class="card-title">TITULO DEL SHOW</h5>
        <div className="container">
          <p className="card-text"> mini descripción </p>
        </div>
      </div>
      <div className="card-body">
        <button
          type="button"
          className="btn mx-2 text-white"
          style={{ backgroundColor: "#FE6848" }}
        >
          Comprar
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleLike}
        >
          {" "}
          <i className="bi bi-heart"></i>{" "}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
