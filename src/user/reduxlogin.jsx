import { useState } from "react"
import {login} from'../redux/counterSlice'
import { useDispatch,useSelector } from "react-redux"
import Navbars from "../todolist/navbar"
import { useNavigate } from "react-router-dom"





export default  function ReduxLogin(){
    const nav=useNavigate()
    const dispatch=useDispatch()
    const authorization=useSelector((state)=>state.counter.authorization)
 

    const [user,setUser]=useState({})
    const  handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const  handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(user))
        .unwrap()
        .then(() => {
          nav('/userhome'); // Navigate to the dashboard on successful login
        })
        .catch((err) => {
          console.log(err);
        });
           
    }
    return(
        <>
        <Navbars/>
      
        <form method="post" onSubmit={handleSubmit}>
           
               <input 
             type="email"
             name="email"
             placeholder="email"
             onChange={handleChange}
             required
             />
               <input 
             type="password"
             name="password"
             placeholder="password"
             onChange={handleChange}
             required
             />
               
             <button  
               type="submit"
               >
               Sign In
               </button>

        </form>
        </>
    )
}