import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export function Card ({post}) {
  return (
        
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

                    <button type="button" className="btn mx-2 btn-outline-warning"> <i className="bi bi-heart"></i> </button>

                    <button type="button" className="btn mx-2 mt-2 btn-outline-info"> <i class="bi bi-pencil"></i></button>

                    <button onClick={() => toast.success('Hello')} type="button" className="btn mx-2 mt-2 btn-outline-danger"> <i class="bi bi-x-circle-fill"></i> </button>
                </div>
            </div>

 
  )
}