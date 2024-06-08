import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/auth/' }),
    endpoints: builder => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: 'login',
                method: 'POST',
                body: { username, password },
            }),
            transformResponse: body => {
                const { token, refreshToken, ...user } = body
                return { token, refreshToken, user }
            }
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST',
            }),
        }),
        refreshToken: builder.mutation({
            query: refreshToken => ({
                url: 'refresh',
                method: 'POST',
                body: { refreshToken },
            }),
        }),
    }),
})
