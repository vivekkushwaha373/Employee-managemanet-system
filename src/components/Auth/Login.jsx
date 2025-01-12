import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const submithandler = (e) => {
    console.log(email, password);
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
          <div className='border-2  rounded-xl border-emerald-600 p-20' >
              <form onSubmit={submithandler} className='flex gap-3 flex-col items-center justify-center'>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} required='true' className=' outline-none bg-transparent placeholder:text-gray-400 text-white  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full' type="email" placeholder='Enter your email' />
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} required='true' className=' outline-none bg-transparent placeholder:text-gray-400 text-white  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full' type="password" placeholder='Enter your Password' />
                  <button className='mt-5 outline-none border-none placeholder:text-white text-white   bg-emerald-600 text-xl py-3 px-5 rounded-full'>Log in</button>
              </form>
        </div>
    </div>
  )
}

export default Login
