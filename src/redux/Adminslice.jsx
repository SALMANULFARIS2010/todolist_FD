
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AXIOS from 'axios';

const initialState = {
    value:0,
    adminLogin:false
}
export const adminLogin=createAsyncThunk('admincounter/adminLogin',
    async(payload,{rejectWithValue})=>{
      try{
          const response=await AXIOS.post("http://localhost:9000/admin/adminLogin",payload)
          return response.data
      }
      catch(err){
        rejectWithValue(err.response)
      }
    }
)
export const adminreg=createAsyncThunk('admincounter/adminreg',
    async (payload,{rejectWithValue})=>{
   
        //axios code

// alert('adm reg')
try{    
      const res=await AXIOS.post("http://localhost:9000/admin/adminreg",payload)
   return res.data
    
}
catch(err){
    rejectWithValue(err.response)
}
})
export const Adminslice=createSlice(
    {
        name:'admincounter',
        initialState,
        reducers:{
            logout:(state)=>{
                alert('log out')

            }

        },
        extraReducers:(builder)=>{
            builder
            .addCase(adminreg.fulfilled,(state,action)=>{
                //response result
                 alert(action.payload.msg )//res.data
            })
            .addCase(adminreg.rejected,(state,action)=>{

                //rejection result
          
            })
            .addCase(adminLogin.fulfilled,(state,action)=>{
                let status=action.payload.status;
                if(status=1){
                    alert('login succes')
                     state.adminLogin=true;
                }
            })
            .addCase(adminLogin.rejected,(state,action)=>{
                let res=action.payload;
                alert(res)

            })
          }

    }
)

export const{logout} =Adminslice.actions
export default Adminslice.reducer;





