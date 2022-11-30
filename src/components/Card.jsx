import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img}) => {
  return (
         
        <div className="card mb-3" >
          <img src={ img } className="card-img-top" alt="imagen.png" />
            <div className="card-body">
              <h5 class="card-title">TITULO DEL SHOW</h5>    
                <div className="container">
                  <p className="card-text"> mini descripción </p>
                </div>                                      
            </div>
              <div className="card-body">
                
              </div>
              <div className="card-footer text-muted">
                  <Link to="/BuyTicket">
                  <button type="button" className="btn mx-2 text-white" style={{ backgroundColor: "#FE6848" }}>Comprar</button>
                  <button type="button" className="btn btn-outline-danger"> <i className="bi bi-heart"></i> </button>
                  </Link>
              </div>
          </div>
  )
}

Card.propTypes = {
    img: PropTypes.string,
}

export default Card