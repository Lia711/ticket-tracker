import React from 'react'
import "./Select.scss"

const Select = () => {
  return (
    <form id="employee-form">
        <label className='label' for="sort-employees">Sort By</label>
        <select name="sort-employees" id="sort-employees">
          <option value="all">All</option>
          <option value="junior">Junior Software Developer</option>
          <option value="dev">Software Developer</option>
          <option value="senior">Senior Software Developer</option>
          <option value="manager">Project Manager</option>
          <option value="tester">Tester</option>
          <option value="hardman">Hard Man</option>
        </select>
        <button type="submit">Submit</button>
      </form>
  )
}

export default Select