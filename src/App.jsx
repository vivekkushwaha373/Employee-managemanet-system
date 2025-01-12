import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashborad from './components/Dashboard/AdminDashborad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const {userData} = useContext(AuthContext);
  const [loggedInData, setLoggedInData] = useState(null);

  
  //here loggedInUser can e null or can not be
  useEffect(() => {
    if (userData) {
      //userData jab update ho to local storage updat eho
      localStorage.setItem('employees', JSON.stringify(userData?.employees));
      //agar logged in user already hai localstorage me loggedin set ho gaye 
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setLoggedInData(loggedInUser.data)
      }
    }
 
    return () => {
      localStorage.removeItem('loggedInUser');
    };
  }, [userData])



  const handleLogin = (email, password) => {
    const admin = userData.admin.find((e) => email == e.email && e.password == password);
    const employee = userData.employees.find((e) => email == e.email && e.password == password);
    
    console.log(employee, admin);
    
    if (userData && admin) {
    
        setUser('admin');
        setLoggedInData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: loggedInData }));
      
    }
    else if (userData && employee) {
      
        setUser('employee');
        setLoggedInData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: loggedInData }));
      
    }
    else {
      alert('Invalid Credentials')
    }
  }
  
  console.log('loggedinData: ', loggedInData);


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}></Login> : ''}
      {user == 'admin' ? <AdminDashborad changeUser={setUser} data={loggedInData}></AdminDashborad> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} setLoggedInData={setLoggedInData} data={loggedInData}></EmployeeDashboard> : null)}
      {/* <AdminDashborad></AdminDashborad> */}
    </>
  )
}

export default App
