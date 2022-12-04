//import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card} from './Card'
import {usePosts} from '../context/postContext.js'
//import { Router } from 'workbox-routing'
// import Loading from './Loading'
// import { propTypes } from 'react-bootstrap/esm/Image'
const Cards = () => {

  const {posts} = usePosts()

  if (posts.length === 0 ) return (
    <div>
      <h1>there are not SHOWS</h1>
    </div>
  )

  return (
    <>
        <div className="card p-3">                
                <div className="card-body text-white"  style={{ backgroundColor: "#FE6848" }} >
                       <div class="row justify-content-between">
                          <div class="col-4">
                            <p className="fs-3 fw-bold">MAS EVENTOS </p> 
                          </div>
                          <div class="col-4 text-end">
                            <Link to="/AddShows" className='btn btn-light'>
                                <i className="bi bi-person-plus-fill"> Añadir Shows </i>
                            </Link>  
                          </div>
                        </div>
                </div>
            <br/>
                    <div className='row row-cols-2 row-cols-lg-5'>
                        {
                          posts.map(post => (
                            <Card post={post} key={post._id}  />
                          )) 
                        }
                    </div>
        <hr/><br/>
       </div>
    </>
  );
};

export default Cards;