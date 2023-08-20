import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../features/api/apiSlice"

/**
 * Setup store quickly with RTK's very own `configureStore({...})`
 * 
 * @returns {EnhancedStore}
 * @readonly
 */
const store = configureStore({
  /**
   * Map our written reducers as features
   * In entire Redux store
   * 
   * @param {ReducersMapObject}
   */
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  /**
   * Intervene Redux logic and behaviour
   * 
   * @param {middleware?}
   * @argument {CurriedGetDefaultMiddleware}
   */
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

/**
 * Infer the desired and needed types from store
 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
