import React from 'react'
import Cards from './Cards'

import {Bookmark} from './Bookmark'
import { Carousels } from './Carousels'



const Container = () => {
  return (
    <>
      <div>
        <Carousels/>
      </div>
      <div className='my-1'>
        <Bookmark />
      </div>

      <div className=" ">
        <Cards />
      </div>
    </>
  );
};

export default Container;