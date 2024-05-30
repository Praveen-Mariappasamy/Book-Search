import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'
const Header = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Find Your Book Of Choice</h2> <br/>
          <p className="header-text fs-18 fw-3">They say that reading makes for great company, and we couldn't agree more. Whether you're seeking adventure, knowledge, or simply a moment of escape, your perfect companion awaits within these pages. So, dive in, explore, and discover your next favorite companion. Happy reading!</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
