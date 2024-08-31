
import { PayloadAction, createSlice } from '@reduxjs/toolkit';



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
   setDatailuser:(state ,action: PayloadAction<User>)=>{
    
    state.firstname= action.payload.firstname;
    state.lastname= action.payload.lastname;
    state.id= action.payload.id;
    state.image= action.payload.image;
    state.address.city=action.payload.address.city,
    state.address.province=action.payload.address.province
    state.phone= action.payload.phone;
    state.tasks = [...state.tasks,...action.payload.tasks]
   }
  },
})

export const {setDatailuser } = counterSlice.actions;

export default counterSlice.reducer;