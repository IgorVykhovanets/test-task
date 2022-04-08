import React from 'react';

import './album.modules.css'

const Album = ({album: {title, url}}) => {
    return (
        <div className={'photo-color'}>
            <img src={url} alt={title}/>
        </div>
    );
};

export default Album;