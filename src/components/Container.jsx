import React from 'react'
import Cards from './Cards'
import Carousel from './Carousel'
import Bookmark from './Bookmark'




const Container = () => {
  return (

    <>
      <div>
        <Carousel/>
      </div>
      <div className=' my-3'>
        <Bookmark/>
      </div>

      <div className=' '>
        <Cards />
      </div>
    </>

  )
}

export default Container