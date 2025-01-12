import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import AcceptTask from './AcceptTask';

const NewTask = ({ data, firstname, setLoggedInData}) => {
    
    const { userData,setUserData } = useContext(AuthContext);
    
    // const getUserData=userData.employees.find((e) => e.firstname == firstname);
    
    // getUserData.tasks.active = true;

    // const authData = { ...userData }; // Create a shallow copy of userData
    const AcceptTask = () => {
        
         setUserData((prevUserData) => {
                const updatedEmployees = prevUserData.employees.map((employee) => {
                    if (employee.firstname === firstname) { // Match the employee by firstname
                        // Update the tasks array
                        const updatedTasks = employee.tasks.map((task) =>
                            task.title === data.title && task.date === data.date // Match the specific task by unique fields
                                ? { ...task, active: true, newTask: false } // Toggle the active state
                                : task // Keep other tasks unchanged
                        );

                        // Calculate updated task numbers
                        const updatedTaskNumber = {
                            ...employee.taskNumber,
                            active: updatedTasks.filter(task => task.active).length, // Count of active tasks
                            newTask: updatedTasks.filter(task => task.newTask).length // Count of new tasks
                        };

                        return {
                            ...employee,
                            taskNumber: updatedTaskNumber,
                            tasks: updatedTasks
                        };
                    }
                    return employee; // Return unchanged employee if not matched
                });

                return {
                    ...prevUserData,
                    employees: updatedEmployees // Update the employees array
                };
            });
        
       


    }
 
    useEffect(() => {
        if (firstname)
        {
            const emp = userData.employees.find((e) => e.firstname == firstname);
            setLoggedInData(emp);

        }
        
    }, [userData]);
    // console.log('UserData... ', userData);
    

  return (
      <div id='tasklist' className=' overflow-y-auto scrollbar-none flex-shrink-0 h-full w-[350px] p-5 bg-red-400 rounded-xl '>
          <div className='flex justify-between items-center'>
              <h1>New Task</h1>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>{data.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold '>{data.title}</h2>
          <p className='text-sm mt-2 '>
             {data.description}
          </p>
          <div className='mt-4'>
              <button onClick={AcceptTask}>Accept Task</button>
          </div>
      </div>
  )
}

export default NewTask
