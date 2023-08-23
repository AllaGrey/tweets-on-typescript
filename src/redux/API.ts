import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../models/IUser'
import { IFilter } from '../models/IFilter'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6456b51a2e41ccf1692374e0.mockapi.io/' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], IFilter>({
            query: (filter) => ({
                url: `users`,
                params: ({
                    limit: 6,
                    page: filter.page,
                    isFollowing: filter.isFollowing,
                }),
            providesTags: ['Users']
        }),
        }),
        updateUser: builder.mutation<IUser, IUser>({
            query: (updatedUser) => ({
            url:    `users/${updatedUser.id}`,
            method: "PUT",
                body: updatedUser,
            }),
            invalidatesTags: ['Users'],
        })
    }),
})


export const { useGetAllUsersQuery, useUpdateUserMutation } = usersApi