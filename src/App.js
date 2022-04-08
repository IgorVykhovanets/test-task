import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home.page/home.page";
import TodosPage from "./pages/todos.page/todos.page";
import PhotosPage from "./pages/photos.page/photos.page";
import TodoPage from "./pages/todo.page/todo.page";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/todos/:id'} element={<TodoPage/>}/>
                <Route path={'/photos'} element={<PhotosPage/>}/>
            </Routes>
        </div>
    );
};

export default App;