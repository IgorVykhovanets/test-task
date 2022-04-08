import {configureStore} from "@reduxjs/toolkit";

import {albumsReducer} from "./slice/albums.slice";
import {todosReducer} from "./slice/todos.slice";

export const store = configureStore({
    reducer: {
        albumsReducer,
        todosReducer
    }
});
