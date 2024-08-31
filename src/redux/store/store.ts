import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/slice/userslice'

export const store:any = configureStore({
  reducer: {
    user: userReducer,
    
  },
});

export default store;