import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/auth'

const slice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
                state.user = null
                state.token = null
            })
            .addMatcher(authApi.endpoints.refreshToken.matchFulfilled, (state, action) => {
                state.token = action.payload.token
            })
    },
})

export default slice.reducer

export const selectUser = state => state.auth.user
