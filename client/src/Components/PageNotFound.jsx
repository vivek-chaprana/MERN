import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='main404 bg-light'>
    <div className="bigtext">
      <h1>
      404
      </h1>
    </div>

    <div className="d-flex flex-column justify-content-center text-center py-5 my-5 mnasodjasiud">
      <h1 className='text-danger ' >404 Error</h1>
      <h3 className='text-dark mt-3'> We are sorry, page not found !</h3>
      <p className='text-dark mt-2'> The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <br /><br />
      <NavLink  to="/">
      <button className="btn btn-outline-primary px-4 py-2 rounded-pill">
      Back To Homepage
      </button>
      </NavLink> 
    </div>
    </div>
  )
}

export default PageNotFound