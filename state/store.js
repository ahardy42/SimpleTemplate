import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './slices/users'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware),
})

setupListeners(store.dispatch)

export default store