import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'
import counterReducer from '@/store/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// https://cn.redux.js.org/tutorials/typescript-quick-start#%E5%AE%9A%E4%B9%89-hooks-%E7%B1%BB%E5%9E%8B
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual
export default store
