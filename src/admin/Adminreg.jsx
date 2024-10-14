import React from 'react'
import { useState } from 'react'
import { adminreg } from '../redux/Adminslice'
import { useDispatch } from 'react-redux'
const Adminreg = () => {
    const [admin,setadmin]=useState({})
    const dispatch=useDispatch()
    const handlechange=(e)=>{
        setadmin({...admin,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(admin)
        dispatch(adminreg(admin))
    }
 
  return (
    <div>
    <h1> Admin</h1> 
    <p><input type="text" placeholder='username' name='username' onChange={handlechange} required /></p>
    <p><input type="password" placeholder='password' name='password' onChange={handlechange} required /></p>
    <p>
        <button type='button' onClick={handlesubmit}>create</button>
    </p>
    </div>
   
  )
}

export default Adminreg
