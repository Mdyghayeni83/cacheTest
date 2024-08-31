import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '@/redux/slice/userslice';
import {User} from '@/@types/usertype'

const rootReducer = combineReducers({
    user: userReducer,

  });
  
  export default rootReducer;