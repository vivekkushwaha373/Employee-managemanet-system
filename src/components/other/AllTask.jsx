import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    // const {authData} = useContext(AuthContext);
    const  {userData}  = useContext(AuthContext);
    
    

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded w-full'>
            <div className=' bg-red-400 mb-2 py-2 gap-1  px-4 flex justify-between rounded'>
                <h2 className=' text-sm sm:text-lg font-medium w-1/5 '>Employee Name</h2>
                <h3 className=' text-sm sm:text-lg font-medium w-1/5 '>New Task</h3>
                <h5 className=' text-sm sm:text-lg font-medium w-1/5 '>Active Task</h5>
                <h5 className=' text-sm sm:text-lg font-medium w-1/5 '>Completed</h5>
                <h5 className=' text-sm sm:text-lg font-medium w-1/5 '>Failed</h5>
            </div>
            <div className=''>
                {

                    userData.employees.map((elem, idx) => {
                        return <div key={idx} className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
                            <h2 className='text-lg font-medium w-1/5 '>{elem.firstname}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumber.newTask}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskNumber.active}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskNumber.completed}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumber.failed}</h5>
                        </div>
                    })

                }
            </div>
           
            
            
           
        </div>
    )
}

export default AllTask
