import {Routes,Route} from'react-router-dom'
import HomePage from './todolist/homepage'
import Navbars from './todolist/navbar'
import ToDOLists from './todolist/todolits'
import AddTask from './todolist/addtask'
import EditPage from './todolist/edit'
import Register from './user/register'
import Login from './user/login'
import UserHome from './user/userhome'
import authen from './context/authen'
import { useState } from 'react'
import ReduxLogin from './user/reduxlogin'
import Adminreg from './admin/Adminreg'
import Adminlogin from './admin/Adminlogin'
import Adminhome from './admin/Adminhome'
import SubscriptionPlans from './user/SubscriptionPlans'
function App() {
const [isLogin,setLogin]=useState(false)

  return (
    <>
  
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
         
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/SubscriptionPlans" element={<SubscriptionPlans/>}></Route>
      {/* <Route path="/userhome/*" element={<UserHome/>}></Route> */}
      {/* <Route path="/adminreg" element={<Adminreg/>}></Route>
       {/* <Route path='/adminsignin'element={<Adminlogin/>}></Route> */}
       {/* <Route path='/adminsignin' element={<Adminlogin/>}></Route>
       <Route path='/adminhome/*' element={<Adminhome/>}></Route>  */}
    </Routes>
    
   

    
     
    </>



  )
}

export default App
