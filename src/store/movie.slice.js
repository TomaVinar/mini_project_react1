import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {movies} from '../services';

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (_, {rejectWithValue}) => {
        try {
            return await movies.getAll;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllMovie.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload.results;
        },
        [getAllMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const movieReducer = movieSlice.reducer

export default movieReducer;