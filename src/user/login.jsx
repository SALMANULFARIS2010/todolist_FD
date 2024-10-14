// import { useState } from "react"
// import AXIOS  from  'axios'
// import Navbars from "../todolist/navbar"
// import { useNavigate } from "react-router-dom"
// import authen from "../context/authen";
// import { useContext } from "react";

// export default  function Login(){
//   const login=useContext(authen)//{status:false,setLogin:setLogin()}
//     const nav=useNavigate()
//     const [user,setUser]=useState({})
//     const  handleChange=(e)=>{
//         setUser({...user,[e.target.name]:e.target.value})
//     }
//     const  handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log(user)
//         const  url="http://localhost:9000/user/login"
//         AXIOS.post(url,user)
//         .then((res)=>{
//             const response=res.data; //{status:1,msg:''}
//             if(response.status==1){
//                 alert(response.msg)
            
//                 localStorage.setItem('token',res.data.token)
               
//                 nav("/userhome")
//             }
//             else{
//                 alert(response.msg)
//             }
//         })
//         .catch(err=>console.log(err))
//     }
//     return(
//         <>
//         <Navbars/>
      
//         <form method="post" onSubmit={handleSubmit}>
           
//                <input 
//              type="email"
//              name="email"
//              placeholder="email"
//              onChange={handleChange}
//              required
//              />
//                <input 
//              type="password"
//              name="password"
//              placeholder="password"
//              onChange={handleChange}
//              required
//              />
               
//              <button  
//                type="submit"
//                >
//                Sign In
//                </button>

//         </form>
//         </>
//     )
// }







import { useState, useContext } from 'react';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbars from '../todolist/navbar';
import authen from '../context/authen';

export default function Login() {
  const login = useContext(authen); // Assuming authen provides login state and setters
  const nav = useNavigate();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:9000/user/login";
    AXIOS.post(url, user)
      .then((res) => {
        const response = res.data;
        if (response.status === 1) {
          alert(response.msg);
          localStorage.setItem('token', response.token);
          nav("/SubscriptionPlans"); // Redirect to subscription plans
        } else {
          alert(response.msg);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Navbars />
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
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
