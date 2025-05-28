import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
  return (
    <div className="navlinks">
        <NavLink className="navlink" to={`/`}><i className="fa-solid fa-ticket"></i> Events </NavLink>
    </div>
  )
}

export default Navlinks