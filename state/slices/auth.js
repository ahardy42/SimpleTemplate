import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/auth'

const slice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {},
    // Add extra reducers for the auth API endpoints
    // these matchers will update the state based on the result of the API calls when they are fulfilled!!
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

// Selectors to be used with useSelector
export const selectUser = state => state.auth.user
