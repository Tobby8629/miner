import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const glandApi = createApi({
    reducerPath: "glandApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://127.0.0.1:8000/api"
    }),
    endpoints: (builder) => ({
      getStarted: builder.mutation({
        query: (email) => ({
            url: '/get-started',
            method: 'post',
            body: email
        })
      }),
      registerUser: builder.mutation({
        query: (userData) => ({
            url: "/register",
            method: "POST",
            body: userData,
        })
      })
    })
}) 

export const { 
  useRegisterUserMutation,
  useGetStartedMutation,
 } = glandApi