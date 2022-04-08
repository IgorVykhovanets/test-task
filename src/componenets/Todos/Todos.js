import React from 'react';
import {useSelector} from "react-redux";

import './todos.modules.css'
import Todo from "../Todo/Todo";

const Todos = () => {

    const {todos} = useSelector(state => state['todosReducer']);

    let completed = todos.filter(todo => todo.status === true).length;

    return (
        <div>
            <div className={'task-list-block'}>
                <div>All: {todos.length}</div>
                <div>Completed: {completed}</div>
            </div>
            <div>{todos && todos.map(todo => <Todo key={todo.id} todos={todo}/>)}</div>
        </div>
    );
};

export default Todos;