import React from 'react'
import Cards from './Cards'
import Navbar from './Navbar'


const Container = () => {
  return (
    <div className='container border'>
      <h1>aqui va el navbar</h1>
      <Navbar/>
       <Cards />
    </div>
  )
}

export default Container