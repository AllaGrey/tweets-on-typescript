import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from './API'
import { filterSliceReducer } from './filterSlice'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        filter: filterSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
})


setupListeners(store.dispatch)