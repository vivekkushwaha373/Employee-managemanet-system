import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({ data, firstname}) => {
   
    const {setUserData } = useContext(AuthContext);

    const failTask = () => {
        setUserData((prevUserData) => {
            const updatedEmployees = prevUserData.employees.map((employee) => {
                if (employee.firstname === firstname) { // Match the employee by firstname
                    // Update the tasks array
                    const updatedTasks = employee.tasks.map((task) =>
                        task.title === data.title && task.date === data.date // Match the specific task by unique fields
                            ? { ...task, active: false, failed: true } // Toggle the active state
                            : task // Keep other tasks unchanged
                    );
    
                    // Calculate updated task numbers
                    const updatedTaskNumber = {
                        ...employee.taskNumber,
                        active: updatedTasks.filter(task => task.active).length, // Count of active tasks
                        failed: updatedTasks.filter(task => task.failed).length // Count of new tasks
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

    const completeTask = () => {
        setUserData((prevUserData) => {
            const updatedEmployees = prevUserData.employees.map((employee) => {
                if (employee.firstname === firstname) { // Match the employee by firstname
                    // Update the tasks array
                    const updatedTasks = employee.tasks.map((task) =>
                        task.title === data.title && task.date === data.date // Match the specific task by unique fields
                            ? { ...task, active: false, completed: true } // Toggle the active state
                            : task // Keep other tasks unchanged
                    );
    
                    // Calculate updated task numbers
                    const updatedTaskNumber = {
                        ...employee.taskNumber,
                        active: updatedTasks.filter(task => task.active).length, // Count of active tasks
                        completed: updatedTasks.filter(task => task.completed).length // Count of new tasks
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



  return (
      <div id='tasklist' className=' flex-shrink-0 h-full w-[350px] p-5 bg-green-400 rounded-xl '>
          <div className='flex justify-between items-center'>
              <h1>Active</h1>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>{data.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold '>{data.title}</h2>
          <p className='text-sm mt-2'>
              {data.description}
          </p>
          <div className='flex justify-between mt-4'>
              <button onClick={completeTask} className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
              <button onClick={failTask} className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
          </div>
      </div>
  )
}

export default AcceptTask
