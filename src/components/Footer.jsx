import React from 'react'

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-center">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className=' text-white'> 
                    footer - &copy; {new Date().getFullYear()} 
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Footer