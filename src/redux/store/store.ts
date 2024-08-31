import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/redux/combinreducer/rootReducer';
import { useSelector } from 'react-redux';
const rootReducer1 = combineReducers({

})
export type IRootState = ReturnType<typeof rootReducer>

// export const useAppSelector = useSelector<IRootState, any>(state => state)

 const store = configureStore({
  reducer: rootReducer,
});


export default store;