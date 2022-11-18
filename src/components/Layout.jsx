import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import HeaderNavb from './HeaderNavb'

const Layout = () => {
  return (
    <React.Fragment>
      <HeaderNavb/>
      <Outlet />
      <Footer/>
    </React.Fragment>
  )
}

export default Layout
