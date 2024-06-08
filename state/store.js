import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './api/users'
import { authApi } from './api/auth'
import usersSlice from './slices/users'
import authSlice from './slices/auth'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        users: usersSlice,
        auth: authSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([usersApi.middleware, authApi.middleware]),
})

setupListeners(store.dispatch)

export default store
