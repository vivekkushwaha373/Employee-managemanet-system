import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';


const Header = (props) => {

  const { setUserData } = useContext(AuthContext);
  const loggedIndata = props.data;
  const logOutUser = () => {
    
    localStorage.removeItem("loggedInUser");
    // window.location.reload();
    // setUserData(null);
    props.changeUser('');
  }
  return (
    <div className='flex  sm:items-end flex-col sm:flex-row justify-between'>
      <h1 className='sm:text-2xl text-xl font-medium'>{loggedIndata.firstname==='Vivek'? 'Admin':'User'}<br /> <span className='font-semibold text-3xl'>{loggedIndata.firstname}</span>👋</h1>
          <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 w-fit mx-auto sm:mx-0 rounded-xl '>Log Out</button>
    </div>
  )
}

export default Header
