import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);
  const authData = JSON.parse(localStorage.getItem('employees'));
  

  useEffect(() => {
    console.log('My auth Data: ', authData);
    if (!authData)
    {
      setLocalStorage();
    }


    const { employees, admin } = getLocalStorage();
    
    setUserData({employees, admin});
  
  },[]);
  
  const value = {
    userData,
    setUserData
  }
  
  

  return (
    <div>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider
