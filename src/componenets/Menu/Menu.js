import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

import './menu.modules.css'

const Menu = () => {
    return (
        <div className={'menu-block'}>
            <div className={'title-text-block'}>
                <h2>Started block</h2>
                <img src="http://simpleicon.com/wp-content/uploads/rocket.png" alt="icon-rocket"/>
            </div>
            <div className={'title-menu-block'}>
                <Link to={'/todos'}><Button>Todos</Button></Link>
                <Link to={'/photos'}><Button>Photos</Button></Link>
            </div>
        </div>
    );
};

export default Menu;