import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            let todo = {id: new Date().getTime(), todo: action.payload.todo, status: false}
            localStorage.setItem(todo.id, JSON.stringify(todo));
            let item = localStorage.getItem(todo.id);
            state.todos.push(JSON.parse(item));
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            localStorage.removeItem(toString(state.todos.id));
        },
        changeStatus: (state, action) => {
            let todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.status = !todo.status;
        }
    }
});

export const todosReducer = todosSlice.reducer;
export const {addTodo,deleteTodo,changeStatus} = todosSlice.actions;