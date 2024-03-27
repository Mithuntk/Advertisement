import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="nav-logo">Cars</div>
          <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar