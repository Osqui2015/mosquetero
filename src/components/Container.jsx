import React from 'react'
import Cards from './Cards'

import {Bookmark} from './Bookmark'
import { Carousels } from './Carousels'



const Container = () => {
  return (
    <>
      <div className='divCarousel'>
        <Carousels/>
      </div>
      <div className=' my-3'>
        <Bookmark />
      </div>

      <div className=" ">
        <Cards />
      </div>
    </>
  );
};

export default Container;