import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [title, setTaskTitle] = useState('')
    const [description, setTaskDescription] = useState('');
    const [date, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    // const [newtask, setNewTask] = useState({});

    const { userData, setUserData } = useContext(AuthContext);
    // active: true,
    //     newTask: true,
    //         completed: false,
    //             failed: false,
    //                 title: "Task 1",
    //                     description: "Set up automated CI/CD pipeline.",
    //                         date: "2025-01-07",
    //                             category: "DevOps"
    const submitHandler = (e) => {
        e.preventDefault();
        // setNewTask({ date, description, title, category, active: true, newTask: true, failed: false, completed: false });
        
        const newtask = {
            date,
            description,
            title,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }
        // const data = JSON.parse(localStorage.getItem('employees'));


        // const authData = userData;

        // authData.employees.forEach((elem) => {
        //     if (assignTo == elem.firstName) {
        //         elem.tasks.push(newtask);
        //         elem.taskNumber.newTask = elem.taskNumber.newTask + 1;
        //     }
        // })
        const authData = { ...userData }; // Create a shallow copy of userData
        console.log(assignTo);
        authData.employees = authData.employees.map((employee) => {
            // console.log(employee.firstname);
            if (assignTo === employee.firstname) {
                // console.log('matched');
                return {
                    ...employee,
                    tasks: [...employee.tasks, newtask], // Append new task immutably
                    taskNumber: {
                        ...employee.taskNumber,
                        newTask: employee.taskNumber.newTask + 1, // Update newTask count
                    },
                };
            }
            return employee; // Keep the employee unchanged if conditions aren't met
        });

        // Update the userData state
        setUserData(authData);
        // setUserData(authData);
        // console.log(authData);
        // console.log(userData);

        console.log('My newtask data is : ', newtask);
        console.log('my user data is: ', userData.employees);
        localStorage.setItem('employees', JSON.stringify(userData.employees));

        setTaskTitle('');
        setCategory('');
        setAssignTo('');
        setTaskDate('');
        setTaskDescription('');
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={title} onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }} className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={date}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }} className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }} className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Design , dev, etc' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={description}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>






                {/* <button>Create Task</button> */}
            </form>
        </div>
    )
}

export default CreateTask
