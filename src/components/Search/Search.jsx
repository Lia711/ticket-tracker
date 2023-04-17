import React from 'react'
import "./Search.scss"

const Search = () => {
  return (
    <div className='search'>
        <label className='label'>Search Name</label>
        <input className='input' type="text"></input>
    </div>
  )
}

export default Search