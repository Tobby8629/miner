// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const glandApi = createApi({
//     reducerPath: "glandApi",
//     baseQuery: fetchBaseQuery({
//       baseUrl: "https://app-cryptogland.onrender.com/api",
//       prepareHeaders: (headers) => {
//         headers.set('Content-Type', 'application/json');
//         headers.set('accept', 'application/json');
//       }
//     }),
//     endpoints: (builder) => ({
//       getStarted: builder.mutation({
//         query: (email) => ({
//             url: '/getting-started',
//             method: 'post',
//             headers: {'Content-Type': 'application/json', accept: 'application/json'},
//             body: {email: email}
//         })
//       }),
//       registerUser: builder.mutation({
//         query: (userData) => ({
//             url: "/register",
//             method: "post",
//             headers: {'Content-Type': 'application/json', accept: 'application/json'},
//             body: userData,
//         })
//       }),
//       loginUser: builder.mutation({
//         query: (loginData) => ({
//            url: "/login",
//            method: "post",
//            headers: {'Content-Type': 'application/json', accept: 'application/json'},
//            body: loginData 
//         })
//       }),
//       logoutUser: builder.mutation({
//         url: "/logout",
//         method: "post",
//         headers: {'Content-Type': 'application/json', accept: 'application/json'},
       
//       }),
//       dashboard: builder.query({
//         query: (token) => ({
//           url: "/dashboard",
//           method: "get",
//           headers: {
//             'authorization': `Bearer ${token}`
//           }
//         })
//       })
//     })
// }) 

// export const { 
//   useRegisterUserMutation,
//   useGetStartedMutation,
//   useLoginUserMutation,
//   useLogoutUserMutation,
//   useDashboardQuery,
//  } = glandApi


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const glandApi = createApi({
    reducerPath: "glandApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://app-cryptogland.onrender.com/api",
      prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        headers.set('accept', 'application/json');
        return headers;  // Ensure headers are returned
      }
    }),
    endpoints: (builder) => ({
      getStarted: builder.mutation({
        query: (email) => ({
            url: '/getting-started',
            method: 'post',
            headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
            body: {email: email}
        })
      }),
      registerUser: builder.mutation({
        query: (userData) => ({
            url: "/register",
            method: "post",
            headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
            body: userData,
        })
      }),
      loginUser: builder.mutation({
        query: (loginData) => ({
           url: "/login",
           method: "post",
           headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
           body: loginData 
        })
      }),
      logoutUser: builder.mutation({
        query: () => ({
           url: "/logout",
           method: "post",
           headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
        })
      }),
      dashboard: builder.query({
        query: (token) => ({
          url: "/dashboard",
          method: "get",
          headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'accept': 'application/json'
          }
        })
      })
    })
}) 

export const { 
  useRegisterUserMutation,
  useGetStartedMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useDashboardQuery,
 } = glandApi
