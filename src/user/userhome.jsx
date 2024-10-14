import { Routes,Route } from "react-router-dom";
import {jwtDecode} from "jwt-decode"//npm i jwt-decode
// import UserNavbars from "./usernav";
import ToDOLists from "../todolist/todolits";
import Addtask from "../todolist/addtask";
import EditPage from "../todolist/edit";
import authen from "../context/authen";
import { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Logout from "./logout";
import Profileupload from "./Profileupload";
import AXIOS from 'axios'
export default function UserHome(){

   const user=jwtDecode(localStorage.getItem('token'))
   console.log(user.data)
    const [usern,setRecord]=useState("")
    const [record,setRecords]=useState([])
    const token=localStorage.getItem('token')
    const dat=jwtDecode(token)
    const nav=useNavigate()
   useEffect(()=>{
    setRecord(jwtDecode(localStorage.getItem('token')))
    
    // const token=localStorage.getItem('token')
    // const dat=jwtDecode(token)
    console.log(jwtDecode(token))
    console.log(dat.data[0].fullname)
    setRecord(dat.data[0].email)
   },[])
   useEffect(()=>{
    AXIOS.get("http://localhost:9000/user/viewprofileimage",
        {headers:{userid:dat.data[0]._id}}
    )
     .then((res)=>{
        setRecords(res.data.record)
     })
   },[])
    return(
        <>
        <div>
        <UserNavbars/>
       <div>
        {
            record.length>0?
            record.map((item,index)=>{
                return(
                    <p key={item._id}>
               <img src={`http://localhost:9000/${item.image}`} height={80} width={80}/>
               <h4>{item.imagename}</h4>
               </p>
                )
            })
            :
            'no upload image'
        }
       </div>
        <h2>
          {user.data[0].fullname}

        </h2>
        <p>
            {user.data[0].email}
        </p>
     
        <Routes>
            <Route path="/todolist" element={<ToDOLists/>}></Route>
            <Route path="/addtask" element={<Addtask/>}></Route>
            <Route  path="/editpage/:taskid" element={<EditPage/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
            <Route path="/upload" element={<Profileupload/>}></Route>
        </Routes>
  
        </div>

        </>
    )
}