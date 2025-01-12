import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, setLoggedInData }) => {
    // {
    //     active: true,
    //         newTask: false,
    //             completed: false,
    //                 failed: false,
    //                     title: "Task 1",
    //                         description: "Complete the project report.",
    //                             date: "2025-01-07",
    //                                 category: "Documentation"
    // },
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 py-5 w-full mt-10 '>
            {
                data.tasks.map((elem,idx) => {
                  
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} firstname={data.firstname} setLoggedInData={setLoggedInData} ></AcceptTask>
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} firstname={data.firstname} setLoggedInData={setLoggedInData}></NewTask>
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} firstname={data.firstname} setLoggedInData={setLoggedInData}></CompleteTask>
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} firstname={data.firstname} setLoggedInData={setLoggedInData}></FailedTask>
                    }
                    
              })  
           }

        </div>
    )
}

export default TaskList
