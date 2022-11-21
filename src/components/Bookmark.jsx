import React from 'react'

const bookmark = () => {
  return (
    <div className="card">
     <hr/>
        <div className="card-body text-white"  style={{ backgroundColor: "#FE6848" }}>
                <p className="fs-3 fw-bold">SHOW DESTACADOS </p>  
        </div>
            <hr/>
            <div className='container'>
                <div className="card text-dark bg-light mb-3" style={{ maxWidth: "18rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Light card title</h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </p>
                    </div>
                </div>
            </div>
        

    </div>
  )
}

export default bookmark