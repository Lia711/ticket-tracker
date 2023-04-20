import React from 'react'
import "./EmployeeCard.scss"
import Counter from '../Counter/Counter'

const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <h2 className='employeeName'>{props.employeeName}</h2>
      <h2 className='employeeRole'>{props.employeeRole}</h2>
      <Counter />
    </div>
  )
}

export default EmployeeCard