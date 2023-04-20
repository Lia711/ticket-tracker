import React from 'react'
import "./EmployeeCard.scss"
import Counter from '../Counter/Counter'
import team from '../../assets/data/team'

const EmployeeCard = () => {
  return team.map((employee)=> (
    <div className="employee-card">
      <h2 className='employeeName'>{employee.name}</h2>
      <h2 className='employeeRole'>{employee.role}</h2>
      <Counter />
    </div>
  ))

  }

export default EmployeeCard