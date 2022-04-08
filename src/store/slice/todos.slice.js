import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: new Date().getTime(), todo: action.payload.todo, status: false});
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        changeStatus: (state, action) => {
            let todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.status = !todo.status;
        }
    }
});

export const todosReducer = todosSlice.reducer;
export const {addTodo,deleteTodo,changeStatus} = todosSlice.actions;