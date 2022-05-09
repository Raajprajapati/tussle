import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <>
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h1 className="name">tussle.fit</h1>
                </div>
                <p>Become your best self.</p>
            </div>
        </header>
    </>
  )
}

export default Header