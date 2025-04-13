import React from 'react'
// import PropTypes from 'prop-types'

const Navbar = () => {
  return (
    <div className='bg-slate-700 h-16 px-16 items-center flex '>

    <h1 className='text-3xl font-bold text-green-700'>Employee Incharge Service</h1>
    <div className='space-x-4 ml-auto'></div>
    <a className="hover:text-blue-600" href="/"> Home</a>
    <a className="hover:text-blue-600" href="/"> Profile</a>
    <a className="hover:text-blue-600" href="/"> Logout</a>
  </div>
  )
}

// navbar.propTypes = {}

export default Navbar