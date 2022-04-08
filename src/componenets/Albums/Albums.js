import React from 'react';
import {useSelector} from "react-redux";

import Album from "../Album/Album";
import './albums.modules.css'

const Albums = () => {

    let {albums} = useSelector(state => state['albumsReducer']);

    return (
        <div className={'all-photos'}>
            <div>{albums && albums.map(album => <Album key={album.id} album={album}/>)}</div>
        </div>
    );
};

export default Albums;