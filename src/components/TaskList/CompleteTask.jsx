import React from 'react'

const CompleteTask = ({data}) => {
  return (
      <div id='tasklist' className=' flex-shrink-0 h-full w-[350px] p-5 bg-blue-400 rounded-xl '>
          <div className='flex justify-between items-center'>
              <h1>Completed Task</h1>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>{data.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold '>{data.title}</h2>
          <p className='text-sm mt-2'>
             {data.description}
          </p>
          <div className='mt-2'>
              <button className='w-full'>Complete</button>
          </div>
      </div>
  )
}

export default CompleteTask
