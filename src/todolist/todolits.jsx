
// import AXIOS from 'axios'
// import { useState,useEffect } from 'react'
// import EditIcon from '@material-ui/icons/Edit';
// import {Delete} from '@material-ui/icons'
// import authen from '../context/authen';
// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { jwtDecode } from 'jwt-decode';
// export default  function ToDOLists(){
//     const nav=useNavigate()
//     const user=jwtDecode(localStorage.getItem('token'))
//     const [record,setRecord]=useState([]);
//     const [search,setSearch]=useState("");
//     const [msg,setMsg]=useState("")
   
//     useEffect(()=>{
//       const url="http://localhost:9000/task/fetchtask" //api
//       AXIOS.get(url,{headers:{
//         token:sessionStorage.getItem('token'),
//         userid:user.data[0]._id
//         }
//     })
//       .then((res)=>{
       
        
//         if(res.data.status==0){
//             setMsg(res.data.msg) 
//             nav("/userhome/todolist")
//         }
//         if (res.data.status==1){
//           setRecord(res.data.record)
//         }
//         else if(res.data.status==2){
//             setMsg("No Data")
//         }
        
//       })
//       .catch(err=>console.log(err))
//     },[])
//     const taskDelete=(taskid)=>{
//         //axios 
//         alert(taskid)
//         const url=`http://localhost:9000/task/delete/${taskid}`; //params
//         // router.route("/delete").delete(taskdeletes)
//         AXIOS.delete(url)
//         .then((res)=>{
//             alert(res.data)
//         })
//         .catch(err=>console.log(err))
//     }
//     return(
//         <>
//         <h1>
//             Todolist
//         </h1>
//         <div>
//             <input 
//              type="text"
//              name="search"
//              placeholder="search by taskname"
//              onChange={(e)=>setSearch(e.target.value)}
//              />
//         </div>
//         <div>
//         <a href="/userhome/addtask">AddTask</a>
    
//             <table >
//                 <tr>
//                     <th>
//                         Taskname
//                     </th>
//                     <th>
//                         Date
//                     </th>
//                     <th>
//                         Time
//                     </th>
//                     <th colSpan={2}>Action</th>
//                 </tr>
//                 {
                    
                   
//                      record.length>0 &&
//                      record.filter((list)=>{
//                         return list.taskname.toLowerCase().match(search.toLowerCase())
//                     })
                    
//                     .map((items,index)=>{
//                          return(
//                             <tr key={index}>
//                                 <td>
//                                     {items.taskname}
//                                     <p>
//                                         {items.userid.fullname}
//                                     </p>
//                                 </td>
//                                 <td>
//                                     {items.taskdate}
//                                 </td>
//                                 <td>
//                                     {items.tasktime}
//                                 </td>
//                                 <td>
//                                     <button onClick={()=>{
//                                         taskDelete(items._id)
//                                     }}>
//                                        <Delete/>
//                                     </button>
//                                 </td>
//                                 <td>
//                                 <a href={`/userhome/editpage/${items._id}`}>
//                                 Edit
//                                 </a>
//                                 </td>
//                             </tr>
//                          )
//                     })
//                 }
//             </table>
             
           
//             {msg}
//         </div>
     
        
//         </>
//     )
// }







import AXIOS from 'axios';
import { useState, useEffect } from 'react';
import { Delete } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import "./todolist.css"

export default function ToDOLists() {
  const nav = useNavigate();

  const user=jwtDecode(localStorage.getItem('token'))
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!user) {
      nav("/");
      return;
    }

    const url = "http://localhost:9000/task/fetchtask"; // API
    AXIOS.get(url, {
      headers: {
        token: sessionStorage.getItem('token'),
        userid: user.data[0]._id,
      },
    })
      .then((res) => {
        if (res.data.status === 0) {
          setMsg(res.data.msg);
          nav("/userhome/todolist");
        } else if (res.data.status === 1) {
          setRecord(res.data.record);
        } else if (res.data.status === 2) {
          setMsg("No Data");
        }
      })
      .catch(err => {
        console.error(err);
        setMsg("Error fetching tasks");
      });
  }, [nav, user]);

  const taskDelete = (taskid) => {
    // Axios
    const url = `http://localhost:9000/task/delete/${taskid}`; // Params
    AXIOS.delete(url)
      .then((res) => {
        alert(res.data);
        setRecord(record.filter(item => item._id !== taskid)); // Remove the deleted task from the state
      })
      .catch(err => {
        console.error(err);
        alert("Error deleting task");
      });
  };

  return (
    <>
      <h1>Todolist</h1>
      <div>
        <input
          type="text"
          name="search"
          placeholder="search by taskname"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <a href="/userhome/addtask">AddTask</a>
        <table>
          <thead>
            <tr>
              <th>Taskname</th>
              <th>Date</th>
              <th>Time</th>
              <th colSpan={1}>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.length > 0 &&
              record
                .filter((list) => list.taskname.toLowerCase().includes(search.toLowerCase()))
                .map((items, index) => (
                  <tr key={index}>
                    <td>
                      {items.taskname}
                      <p>{items.userid.fullname}</p>
                    </td>
                    <td>{items.taskdate}</td>
                    <td>{items.tasktime}</td>
                    <td>
                      <button onClick={() => taskDelete(items._id)}>
                        <Delete />
                      </button>
                    </td>
                    <td>
                      <a href={`/userhome/editpage/${items._id}`}>Edit</a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        {msg && <p>{msg}</p>}
      </div>
    </>
  );
}


