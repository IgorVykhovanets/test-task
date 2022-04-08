import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import './todo.modules.css'
import {deleteTodo} from "../../store/slice/todos.slice";
import {changeStatus} from "../../store/slice/todos.slice";

const Todo = ({todos}) => {

    const {id, todo, status} = todos

    let dispatch = useDispatch();


    return (
        <div className={'todo-block'}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status ? 'completed' : ''}><Link to={`id=${id}`} state={todos}>{todo}</Link></div>
            <button className={'button-todo-block'} onClick={() => dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export default Todo;