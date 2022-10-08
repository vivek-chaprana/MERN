import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center text-center py-5 my-5">
      <h1 className='text-danger ' >404 Error</h1>
      <h3 className='text-secondary mt-3'> We are sorry, page not found !</h3>
      <p className='text-secondary mt-2'> The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <br /><br />
      <NavLink  to="/">
      <button className="btn btn-outline-warning">
      Back To Homepage
      </button>
      </NavLink> 
    </div>
  )
}

export default PageNotFound