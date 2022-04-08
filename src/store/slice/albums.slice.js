import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {albumsService} from "../../service/albums.service/albums.service";

export const getAlbums = createAsyncThunk(
    'albumsSlice/getAlbums',
    async (id) => {
        try {
            let newAlbums = albumsService.getAllById(id);
            return newAlbums;
        } catch (e) {
            console.error(e)
        }
    }
);

const albumsSlice = createSlice({
    name: 'albumsSlice',
    initialState: {
        albums: []
    },
    extraReducers: {
        [getAlbums.pending]: () => {
            console.log('loading');
        },
        [getAlbums.fulfilled]: (state, action) => {
            state.albums = action.payload;
        }
    }
});

export const albumsReducer = albumsSlice.reducer;