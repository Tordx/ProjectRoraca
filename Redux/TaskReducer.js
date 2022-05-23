
 import { createSlice } from '@reduxjs/toolkit'

 export const taskReducers = createSlice({
   name: 'items',
   initialState: {
     items: [],
     taskID: 1,
     Dones:[],
     Images:[]
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
     },
      setImages: (state , action)  => {
      state.Images = action.payload
      console.log(action)
      console.log('action')
      }
 
   }
 })
 
 // Action creators are generated for each case reducer function
 export const {setItems , setTaskId , setDones, setImages} = taskReducers.actions
 
 export default taskReducers.reducer