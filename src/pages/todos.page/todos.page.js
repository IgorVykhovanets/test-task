import React from 'react';

import './todos.page.modules.css'
import NavLinkMenu from "../../componenets/NavLinkMenu/NavLinkMenu";
import FormTodos from "../../componenets/FormTodos/FormTodos";
import Todos from "../../componenets/Todos/Todos";

const TodosPage = () => {
    return (
        <div className={'todos-page'}>
            <div><NavLinkMenu/></div>
            <div className={'form-todos-block'}><FormTodos/></div>
            <div className={'todos-block'}><Todos/></div>
        </div>
    );
};

export default TodosPage;