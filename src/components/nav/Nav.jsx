import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <div className="container">
      <ul>
           <h1>NETFLIX</h1>
            <from className="from">
                <input type="text" placeholder='Search' />
            </from>
            <li><NavLink to="/shows">Shows</NavLink></li>
        </ul>
      </div>
       
    </nav>
  )
}

export default Nav
