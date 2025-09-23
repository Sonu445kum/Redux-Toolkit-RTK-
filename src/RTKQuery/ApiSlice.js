// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "api",   // unique key
//   baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: () => "/users",   // GET request
//     }),
//     addUser: builder.mutation({
//       query: (newUser) => ({
//         url: "/users",
//         method: "POST",
//         body: newUser,
//       }),
//     }),
//   }),
// });

// export const { useGetUsersQuery, useAddUserMutation } = apiSlice;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Users"], // tag add
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"], //  cache ke liye tag
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Users"], //  ye bolta hai ki getUsers ko refetch karo
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = apiSlice;

