import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
// import StateContext from '../StateContext'

import React, { useEffect } from 'react'

function Header(props) {
  return (
    // <header className="header-bar bg-primary mb-3">
    //   <div>Compass React</div>
    // </header>
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            Nowhere
          </Link>
        </h4>
      </div>
    </header>
  )
}

export default Header
