import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {usePosts} from '../context/postContext.js'


const Card = () => {

  const {posts} = usePosts()

  if (posts.length === 0 ) return (
    <div>
      <h1>there are not SHOWS</h1>
    </div>
  )

  return (    
        posts.map(post => (
          <div key={post._id} >
            <div className="card mb-3" >
            <img src={post.image} className="card-img-top" alt="imagen.png" />
              <div className="card-body">
                <h5 class="card-title">{post.artist}</h5>
              </div>
                <div className="card-body">
                  {post.show} 
                </div>
                <div className="card-footer text-muted">
                    <Link to="/BuyTicket">
                    <button type="button" className="btn mx-2 text-white" style={{ backgroundColor: "#FE6848" }}>Comprar</button>                    
                    </Link>
                    <button type="button" className="btn mx-2 btn-outline-danger"> <i className="bi bi-heart"></i> </button>
                    <button type="button" className="btn mx-2 mt-2 btn-outline-info"> <i class="bi bi-pencil"></i></button>
                </div>
            </div>
          </div>
        ))    
  )
}

Card.propTypes = {
    img: PropTypes.string,
}

export default Card