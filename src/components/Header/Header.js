import React from 'react'
import Navbar from './Navbar'
import SearchForm from './SearchForm'
function Header() {
  return (
    <header className='header'>
      <Navbar />
      <div className='d-flex flex-column justify-content-center align-items-center vh-50 banner'>
        <h1 className='fw-semibold text-center'>What are your favorite <br/> cuisines?</h1>
        <p className='text-uppercase lh-lg'>Personalize your experience</p>
        <SearchForm />
      </div>
    </header>
  )
}

export default Header
