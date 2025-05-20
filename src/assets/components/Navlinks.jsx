import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
  return (
    <div className="navlinks">
        <NavLink className="navlink" to={`/booking`}><i className="fa-regular fa-square-check"></i> Booking </NavLink>
        <NavLink className="navlink" to={`/events`}><i className="fa-solid fa-ticket"></i> Events </NavLink>
    </div>
  )
}

export default Navlinks