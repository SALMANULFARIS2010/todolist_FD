import { useState } from "react"
import AXIOS  from  'axios'
import Navbars from "../todolist/navbar"
import { useNavigate } from "react-router-dom"
import {Button,TextField,Box,Grid,Paper, Typography} from '@material-ui/core'
import { Stack } from "@mui/material"
export default  function Register(){
    const [user,setUser]=useState({})
    const nav=useNavigate()
    const  handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const  handleSubmit=(e)=>{
        e.preventDefault()
        console.log(user)
        const  url="http://localhost:9000/user/register"
        AXIOS.post(url,user)
        .then((res)=>{
            alert(res.data)
            nav("/login")
        })
        .catch(err=>console.log(err))
    }
    return(
        <>
        <Navbars/>
        <Box m={34}>
          <Grid container m={10} spacing={5}  justifyContent="center"
  alignItems="center" >
          <Grid item xs={8}>
            <Typography variant="h3">register form</Typography>
            <Paper>
            <form method="post" onSubmit={handleSubmit}>
            <Stack spacing={5}>

        

{/*            
            <TextField
             type="text"
             name="fullname"
             label='fullname'
             onChange={handleChange}
             variant="outlined"
             required
             /> */}
             
               <TextField 
             type="email"
             name="email"
             label="email"
             onChange={handleChange}
              variant="outlined"
             required
             />
               <TextField 
             type="password"
             name="password"
             label="password"
             onChange={handleChange}
              variant="outlined"
             required
             />
               {/* <TextField 
             type="tel"
             name="mobile"
             label="Mobile number"
             onChange={handleChange}
              variant="outlined"
             required
             /> */}
             <Button  
               type="submit" variant="contained" color="primary"
               >
                Create Account
               </Button>
               </Stack>
        </form>
      
        </Paper>
          </Grid>
          </Grid>
        </Box>
        
        </>
    )
}