import {usePosts} from '../context/postContext.js'
import {Card} from './Card'

export function Bookmark() {

const {posts} = usePosts()

  if (posts.length === 0 ) return (
    <div>
      <h1>there are not SHOWS</h1>
    </div>
  )

  return (
    <div className="card p-3">
            <hr/>            
            <hr/>                
                <div className="card-body text-white"  style={{ backgroundColor: "#FE6848" }} >
                  <p className="fs-3 fw-bold">Evento Destacados </p>              
                </div>
            <br/>
                    <div className='row row-cols-2 row-cols-lg-5'>
                        {
                          posts.filter(post => post.status !== 'No' )
                          .map(post => (
                            
                              <div>
                                <Card post={post} key={post._id}  />
                              </div>
                                                      
                          )) 
                        }
                    </div>
        <hr/><br/>
       </div>
  )
}