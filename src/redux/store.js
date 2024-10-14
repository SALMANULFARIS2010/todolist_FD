import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import Adminslice from './Adminslice'
export const store = configureStore({
    reducer: {
      counter: counterReducer,
      admincounter:Adminslice,

    },
  })

