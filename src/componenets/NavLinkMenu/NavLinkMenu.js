import React from 'react';
import {NavLink} from "react-router-dom";

import './navlink.modules.css';

const NavLinkMenu = () => {
    return (
        <div className={'nav-link-menu'}>
            <div>
                <NavLink to={'/todos'}>Todos</NavLink>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/photos'}>Photos</NavLink>
            </div>
        </div>
    );
};

export default NavLinkMenu;