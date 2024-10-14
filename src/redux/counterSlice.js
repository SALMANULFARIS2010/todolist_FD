import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const initialState = {
  value: 0,
  email: '',
  password: '',
  authorization: false,
 
};

// Create an async thunk for login
export const login = createAsyncThunk(
  'counter/login',
  async (payload, { rejectWithValue }) => {
    const url = 'http://localhost:9000/user/login';
    try {
      const res = await AXIOS.post(url, payload);
      return res.data; // Return the response data if successful
    } catch (err) {
      return rejectWithValue(err.response.data); // Return the error response data if failed
    }
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logout: (state) => {
      state.authorization = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.status === 1) {
          alert(response.msg);
          localStorage.setItem('userN', response.username);
          sessionStorage.setItem('userid', response.userid);
          sessionStorage.setItem('username', response.username);
          sessionStorage.setItem('token', response.token);
          localStorage.setItem('token', response.token);
          state.email = action.meta.arg.email;
          state.password = action.meta.arg.password;
          state.authorization = true;
        } else {
          alert(response.msg);
        }
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload);
        alert('Login failed');
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = counterSlice.actions;

export default counterSlice.reducer;

