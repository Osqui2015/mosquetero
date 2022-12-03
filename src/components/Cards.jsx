//import React, { useEffect} from 'react'
import Card from './Card'
//import { Router } from 'workbox-routing'
// import Loading from './Loading'
// import { Link } from "react-router-dom";
// import { propTypes } from 'react-bootstrap/esm/Image'
const Cards = () => {

    

  return (
    <>
        <div className="card p-3">
            <hr/>
            
            <hr/>
                
                <div className="card-body text-white"  style={{ backgroundColor: "#FE6848" }} >
                       
                <p className="fs-3 fw-bold">MAS EVENTOS </p>                
                </div>
            <br/>
                    <div className='row row-cols-2 row-cols-lg-5'>
                        {
                          <Card />                        
                        }
                    </div>
        <hr/><br/>
       </div>
    </>
  )
}

export default Cards