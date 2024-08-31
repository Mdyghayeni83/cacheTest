import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';


interface Addres {
    city : String,
    province: string
  }
  
  interface Assignee {
    name:string,
    id:number | null,
    image:string
  }
  
  
  interface Tasks {
    name:string , 
    id:number | null,
    text:string,
    assignee: Assignee
  }
  
  interface User {
    firstname:string,
    lastname:string,
    id:number | null,
    image:string,
    address: Addres,
    phone:string,
    tasks: Tasks[]
  }



const initialState:User =  {
    firstname: "",
    lastname: "",
    id:null,
    image: "",
    address: {
        city: "",
        province: ""
    },
    phone: "",
    tasks: []
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   setDatailuser:(state ,action)=>{
    state.firstname= action.payload;
    state.lastname= action.payload;
    state.id= action.payload;
    state.image= action.payload;
      state.address.city=action.payload,
      state.address.province=action.payload
    state.phone= "";
   
   }
  },
})

const [state,setstate] = useState([{
    city: "",
        province: ""
}])

export const {setDatailuser } = counterSlice.actions;

export default counterSlice.reducer;