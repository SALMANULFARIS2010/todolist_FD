// import '../todolist/todolist.css'
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// import { useEffect,useState } from 'react';
// export  default  function UserNavbars(){
//     const nav=useNavigate()

//     const menuDrop=()=>{
       
//         const bk=window.document.querySelectorAll(".navitems");
//         bk.style.display=="none"?bk.style.display="block":bk.style.display="none"
//     }
//     return(
//         <>
//         <div className='nav'>
//             <div className='logo'>
//                 Logo
//                 <button onClick={menuDrop} className='menu'>Menu</button>
//             </div>
//             <div className='navitems'>
//             <a href="/userhome">Home</a>
                
//             <a href="/userhome/todolist">Todolist</a>
//             <a href="/userhome/upload">Upload images</a>
//             <a  href="/userhome/logout">Logout</a>
//             </div>

//             <div className='navitems'>
//                 Social Media
                
                
//             </div>
//         </div>
//         </>
//     )
// }