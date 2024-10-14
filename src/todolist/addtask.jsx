// import { useState } from "react"
// import AXIOS from 'axios'
// import { jwtDecode } from "jwt-decode"
// export default function Addtask(){
//     const [task,setTask]=useState({})
//     const user=jwtDecode(localStorage.getItem('token'))
//     const header={
//         token:localStorage.getItem('token'),
//         userid:user.data[0]._id
//     }

//     const handleChange=(e)=>{
//         setTask({...task,[e.target.name]:e.target.value})
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()//reload will stop
//         console.log(task)
//         AXIOS.post("http://localhost:9000/task/addtask",task,{headers:header})
//         .then((res)=>{
//              alert(res.data)
//         })
//         .catch(err=>console.log(err))

//     }
   
//     return(
//         <>
//          <h1>AddTask</h1>
//         <form method="post" onSubmit={handleSubmit}>
//             <input type="text"
//              name="taskname"
//              onChange={handleChange}
//              required/>
//              <input
//               type="date"
//               name="taskdate"
//               onChange={handleChange}
//               required/>
//               <input type="time"
//               step={1}
//               name="tasktime"
//               onChange={handleChange}
//               required/>
//               <button 
//               type="submit"
//               >
//                 Create
//               </button>
//         </form>
//         </>
//     )
// }





import { useState } from "react";
import AXIOS from 'axios';
import { jwtDecode } from "jwt-decode";

export default function Addtask() {
  const [task, setTask] = useState({
    taskname: '',
    taskdate: '',
    tasktime: ''
  });
  const [message, setMessage] = useState('');

  // Handle token and user decoding with error handling
  const getTokenAndUser = () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const user = jwtDecode(token);
      return {
        token,
        userid: user.data[0]._id
      };
    } catch (error) {
      console.error('Token decoding failed:', error);
      // Optionally redirect or show an error message
      return null;
    }
  };

  const header = getTokenAndUser();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!header) return; // Exit if header setup failed

    AXIOS.post("http://localhost:9000/task/addtask", task, {
      headers: {
        token: header.token,
        userid: header.userid
      }
    })
    .then((res) => {
      setMessage(res.data.message || 'Task added successfully');
      setTask({ taskname: '', taskdate: '', tasktime: '' }); // Reset form fields
    })
    .catch(err => {
      console.error('Error adding task:', err);
      setMessage('Failed to add task');
    });
  };

  return (
    <>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskname"
          value={task.taskname}
          onChange={handleChange}
          placeholder="Task Name"
          required
        />
        <input
          type="date"
          name="taskdate"
          value={task.taskdate}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          step={1}
          name="tasktime"
          value={task.tasktime}
          onChange={handleChange}
          required
        />
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
