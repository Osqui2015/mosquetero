import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import {usePosts} from '../context/postContext.js'
import { AuthContext } from '../contexts/auth';
import React, { useContext } from "react";

export function Card({ post }) {
    const { deletePost } = usePosts();
    const navigate = useNavigate();

    const { loggedAs, token } = useContext(AuthContext);

    const handleDelete = (id) => {
      toast((t) => ( 
          <div className='text-white'>
            <p>Seguro que quieres eliminar el Show? <strong> {id} </strong> </p>
              <div className="row justify-content-md-center">
                <div className="col">
                  <button type="button" className="btn btn-warning mx-2" onClick={ () => {deletePost(id,token); toast.dismiss(t.id)}} >
                    BORRAR
                  </button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-light mx-2" onClick={() => toast.dismiss(t.id)} >
                    CANCELAR
                  </button>
                </div>
              </div>
          </div>
        ),
          {
            style: { backgroundColor: "#202020" },
          }
        );

    };
  return (
            <div className="card mb-3">
              <img src={post.image} className="card-img-top" alt="imagen.png" />
              <div className="card-body">
                <h5 class="card-title text-decoration-underline">{post.artist}</h5>            
                  {post.show} 
                </div>
                <div className="card-footer text-muted items-align-center">
                    <Link to="/ShoppingCart">
                      <button type="button" className="btn mx-2 mt-2 text-white" style={{ backgroundColor: "#FE6848" }}>Comprar</button>                    
                    </Link>
                    
                    {loggedAs('admin') ? (
                      <>
                        <button  onClick={() => navigate(`/AddShows/${post._id}`)} type="button" className="btn mx-2 mt-2 btn-outline-info"> <i class="bi bi-pencil"></i></button>

                        <button onClick={() => handleDelete(post._id)} type="button" className="btn mx-2 mt-2 btn-outline-danger"> <i class="bi bi-x-circle-fill"></i> </button>
                      </>
                    ) : null }
              </div>
            </div>
  );
}