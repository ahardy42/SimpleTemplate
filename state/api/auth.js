import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https:www.example-app.com' }),
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    },
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST',
            }),
        }),
        refreshToken: builder.mutation({
            query: () => ({
                url: 'refresh',
                method: 'POST',
            }),
        }),
    }),
})
