import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const glandApi = createApi({
    reducerPath: glandApi,
    baseQuery: fetchBaseQuery({
      baseUrl: "http://127.0.0.1:8000/api"
    }),
    endpoints: (builder) => ({
      registerUser: builder.query({
        query: (userData) => ({
            url: "/register",
            method: "POST",
            body: userData,
        })
      })
    })
}) 

export const { useRegisterUserQuery } = glandApi