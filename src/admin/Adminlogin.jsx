import React from 'react'
import { useState } from 'react'
import { adminLogin } from '../redux/Adminslice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Adminlogin = () => {
    const [admin,setadmin]=useState({})
    const nav=useNavigate()
    const dispatch=useDispatch()
    const adminstatus=useSelector(state=>state.admincounter.adminLogin)
    const handlechange=(e)=>{
        setadmin({...admin,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
if(dispatch(adminLogin(admin))){
  nav("/adminhome")
}else{
   nav("/")
}
 
    }
  return (
    <div>
      <div>
    <h1> Admin login</h1> 
    <p><input type="text" placeholder='username' name='username' onChange={handlechange} required /></p>
    <p><input type="password" placeholder='password' name='password' onChange={handlechange} required /></p>
    <p>
        <button type='button' onClick={handlesubmit}>Login</button>
    </p>
    {adminstatus?"login success":"not login"}
    </div>
    </div>

  )
}

export default Adminlogin
