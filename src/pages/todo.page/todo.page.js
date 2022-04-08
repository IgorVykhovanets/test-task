import React from 'react';
import {useLocation} from "react-router-dom";

import './todo.page.modules.css'
import NavLinkMenu from "../../componenets/NavLinkMenu/NavLinkMenu";

const TodoPage = () => {

    let {state} = useLocation();

    let {id, todo} = state;

    return (
        <div className={'todo-page-block'}>
            <div><NavLinkMenu/></div>
            <div className={'todo-info-block'}>
                <div>
                    <div>ID: {id}</div>
                    <div>TODO: {todo}</div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;