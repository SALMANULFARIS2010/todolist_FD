import { useParams } from "react-router-dom"
import { useEffect,useRef, useState} from "react";
import AXIOS from 'axios'
export default function  EditPage(){
  const params=useParams()

  const refElement=useRef(null)
    
  useEffect(()=>{
   
    AXIOS.get(`http://localhost:9000/task/findbyid/${params.taskid}`)
    .then((res)=>{
      console.log(res.data)
      const record=res.data[0]
      const element=refElement.current;
      element['taskname'].value=record.taskname;
      element['taskdate'].value=record.taskdate;
      element['tasktime'].value=record.tasktime;
      element['taskid'].value=record._id
      
    })
  },[])
    
const [task,setTask]=useState({})
const handleChange=(e)=>{
  setTask({...task,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  const url="http://localhost:9000/task/updateData";
  const header={taskid:params.taskid}
  AXIOS.put(url,task,{headers:header})
  .then((res)=>{
    alert(res.data)
    
  })
  .catch((err)=>console.log(err))
}

    return(
        <>
        <h1>Editpage</h1>
         <form ref={refElement} onSubmit={handleSubmit}>
        
          <input 
            type="text"
            name="taskname"
            onChange={handleChange}
           
            
            />
            <input 
             type="text"
             name="taskdate"
             onChange={handleChange}
            
             />
             <input
             type="text"
             name="tasktime"
             onChange={handleChange}
             
             />
           <button type="submit">
            Update
           </button>
         </form>
        
        </>
    )
}