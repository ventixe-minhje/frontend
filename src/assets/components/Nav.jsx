import React from 'react'
import Logotype from './Logotype'
import { NavLink } from 'react-router-dom'
import Navlinks from './Navlinks'
import Logout from './Logout'
import Header from './Header'

const Nav = () => {
  return (
      <nav>
        <Logotype />
        <Navlinks />
        <Logout /> 
      </nav>
  )
}

export default Nav