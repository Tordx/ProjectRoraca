
 import { createSlice } from '@reduxjs/toolkit'

 export const taskReducers = createSlice({
   name: 'items',
   initialState: {
     items: [],
     taskID: 1,
     Dones:[]
   },
   reducers: {
     setItems: (state , action ) => {
       state.tasks = action.payload
       console.log(action)
       console.log('action')
     },
     setTaskId: (state , action)  => {
         state.taskID = action.payload
     },
     setDones: (state , action)  => {
       state.Dones = action.payload
   }
 
   }
 })
 
 // Action creators are generated for each case reducer function
 export const {setItems , setTaskId , setDones} = taskReducers.actions
 
 export default taskReducers.reducer