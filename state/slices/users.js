import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['User'],
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => 'users',
            providesTags: ['User'],
        }),
        getUser: builder.query({
            query: id => `users/${id}`,
            providesTags: ['User'],
        }),
    }),
})

export const { useGetUsersQuery, useGetUserQuery, useLazyGetUserQuery } = usersApi