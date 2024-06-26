import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const glandApi = createApi({
    reducerPath: "glandApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://app-cryptogland.onrender.com/api"
    }),
    endpoints: (builder) => ({
      getStarted: builder.mutation({
        query: (email) => ({
            url: '/getting-started',
            method: 'post',
            headers: {'Content-Type': 'application/json', accept: 'application/json'},
            body: {email: email}
        })
      }),
      registerUser: builder.mutation({
        query: (userData) => ({
            url: "/register",
            method: "post",
            headers: {'Content-Type': 'application/json', accept: 'application/json'},
            body: userData,
        })
      }),
      loginUser: builder.mutation({
        query: (loginData) => ({
           url: "/login",
           method: "post",
           headers: {'Content-Type': 'application/json', accept: 'application/json'},
           body: loginData 
        })
      }),
      logoutUser: builder.mutation({
        url: "/logout",
        method: "post",
        headers: {'Content-Type': 'application/json', accept: 'application/json'},
       
      })
    })
}) 

export const { 
  useRegisterUserMutation,
  useGetStartedMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
 } = glandApi