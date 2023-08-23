import {  createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilter } from '../models/IFilter';

// interface FilterState extends IFilter {
//     page: number,
//     isFollowing?: boolean,
//     limit?: string
// }


export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        page: 1,
        // isFollowing: '',
    },
    reducers: {
        filterUsers: (state: IFilter, action: PayloadAction<IFilter>) => {
            state = action.payload
        return state as IFilter
        }
    },
})

export const { filterUsers } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer;