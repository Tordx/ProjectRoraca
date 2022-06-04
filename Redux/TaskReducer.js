
 import { createSlice } from '@reduxjs/toolkit'

 export const taskReducers = createSlice({
   name: 'items',
   initialState: {
     items: [],
     taskID: 1,
     Dones:[],
     Images:[],
     orderItems: [],
     SelectedItem:null
   },
   reducers: {
     setItems: (state , action ) => {
       state.items = action.payload
       console.log(action)
       console.log('action')
     },
     setOrders: (state , action ) => {
      state.orderItems = action.payload
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
      },
      setSelectedItem: (state , action)  => {
        state.SelectedItem = action.payload
        console.log(action)
        console.log('action')
        },
 
   }
 })
 
 // Action creators are generated for each case reducer function
 export const {setItems , setTaskId , setDones, setImages, setSelectedItem , setOrders} = taskReducers.actions
 
 export default taskReducers.reducer