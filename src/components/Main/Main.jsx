import React from 'react'
import "./Main.scss"
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import team from '../../assets/data/team'

const Main = () => {
  return (
    <div className='employee-cards'>
        <EmployeeCard employeeName={team[0].name} employeeRole={team[0].role}/>
        <EmployeeCard employeeName={team[1].name} employeeRole={team[1].role}/>
        <EmployeeCard employeeName={team[2].name} employeeRole={team[2].role}/>
        <EmployeeCard employeeName={team[3].name} employeeRole={team[3].role}/>
        <EmployeeCard employeeName={team[4].name} employeeRole={team[4].role}/>
        <EmployeeCard employeeName={team[5].name} employeeRole={team[5].role}/>
        <EmployeeCard employeeName={team[6].name} employeeRole={team[6].role}/>
        <EmployeeCard employeeName={team[7].name} employeeRole={team[7].role}/>
        <EmployeeCard employeeName={team[8].name} employeeRole={team[8].role}/>
        <EmployeeCard employeeName={team[9].name} employeeRole={team[9].role}/>
    </div>
  )
}

export default Main