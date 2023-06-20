import React from 'react'
import "./Main.scss"
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import team from '../../assets/data/team'

const Main = () => {
  return (
    <div className='employee-cards'>
        <EmployeeCard />
    </div>
  )
}

export default Main