import React from 'react'
import "./Header.scss"
import Select from '../Select/Select'
import Search from '../Search/Search'

const Header = () => {
  return (
    <div className='menu' >
      <Search/>
      <div className="header">
          <h1>Ticket Tracker</h1>
          <h2>By Liana Petrova</h2>
      </div>
      <Select/>
    </div>
    
  )
}

export default Header