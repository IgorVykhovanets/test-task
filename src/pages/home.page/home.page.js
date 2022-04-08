import React from 'react';

import './home.page.modules.css'
import Menu from "../../componenets/Menu/Menu";

const HomePage = () => {
    return (
        <div className={'home-page-block'}>
            <div className={'img-home-block'}>
                <img src='https://oboi.ringtonz.ru/uploads/posts/2020-05/1589646516_more_volny_bryzgi_temnyj_119783_1440x2560.jpg' alt="ocean"/>
            </div>
            <div className={'menu-home-page'}>
                <Menu/>
            </div>
        </div>
    );
};

export default HomePage;