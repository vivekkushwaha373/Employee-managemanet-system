import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, changeUser, setLoggedInData }) => {
  // console.log('data : ', data);
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <h1>UserId:{data.id}</h1>
          <Header changeUser={changeUser} data={data}></Header>
          <TaskListNumbers data={data}></TaskListNumbers>
      <TaskList data={data} setLoggedInData={setLoggedInData}></TaskList>
    </div>
  )
}

export default EmployeeDashboard
