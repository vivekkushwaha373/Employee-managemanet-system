import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashborad = (props) => {
    return (
        <div className='h-screen w-full p-10 '>
            <Header changeUser={props.changeUser} data={props.data}></Header>
            <CreateTask></CreateTask>
            <AllTask></AllTask>
        </div>
    )
}

export default AdminDashborad
