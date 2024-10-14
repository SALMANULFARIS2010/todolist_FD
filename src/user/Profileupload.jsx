import React from 'react'
import { useState } from 'react'
import AXIOS from 'axios'
import { jwtDecode } from 'jwt-decode'
const Profileupload = () => {
    const [profile,setprofile]=useState({})
    const token=localStorage.getItem('token')
    const user=jwtDecode(token)
    console.log(user)
    const handlechange=(name,value)=>{
        setprofile({...profile,[name]:value})
    }
    const formdata=new FormData()
    const handlesubmit=(e)=>{
        e.preventDefault()
        formdata.append('image',profile.image)
        formdata.append('imagename',profile.imagename)
        AXIOS.post("http://localhost:9000/user/uploadimage",formdata,
          {headers:{'Content-Type':'multipart/form-data',
            'userid':user.data[0]._id}})
            .then((res)=>{
                alert(res.data)
            })
    }
  return (
    <div>
      <form method="post" encType='multipart/form-data' onSubmit={handlesubmit}>
      <p>
        <input type ="file" name="image" onChange={(e)=>{
            handlechange(e.target.name,e.target.files[0])
        }}/>
      </p>
      <p>
        <input type="text" name="imagename" onChange={(e)=>{
            handlechange(e.target.name,e.target.value)
        }}/>
      </p>
      <p>

        <button type='submit'>upload</button>
      </p>
      </form>
      {/* <img src="http://localhost:9000/-6060102360082003925_121.jpg"
      width={300} height={300}></img> */}
    </div>
  )
}

export default Profileupload
