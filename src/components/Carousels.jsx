import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {usePosts} from '../context/postContext.js'


export const Carousels = () => {
    
    const {posts} = usePosts()

    if (posts.length === 0 ) return (
        <div>
        <h1>No Hay Shows Disponibles</h1>
        </div>
    )

  return (
    <Carousel slide={false}  >
        {
          posts.slice(0, 2)
          .map(post => (            
            <Carousel.Item key={post._id}>            
                 <img
                    className="d-block w-100"
                    src={post.imageslider}
                    alt="First slide"
                  />
                <Carousel.Caption>                        
                </Carousel.Caption>
            </Carousel.Item>
                                      
          )) 
        }
    </Carousel>
  )
}
