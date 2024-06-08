import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        selectedUser: null,
    },
    reducers: {
        setUsers(state, action) {
            console.log('setUsers action:', action)
            state.users = action.payload
        },
        setSelectedUser(state, action) {
            state.selectedUser = action.payload
        },
    },
})

export default slice.reducer

export const { setUsers, setSelectedUser } = slice.actions

export const selectUsers = state => state.users.users
export const selectSelectedUser = state => state.users.selectedUser