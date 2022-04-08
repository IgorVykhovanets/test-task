import React from 'react';

import './photos.page.modules.css'
import NavLinkMenu from "../../componenets/NavLinkMenu/NavLinkMenu";
import FormAlbums from "../../componenets/FormAlbums/FormAlbums";
import Albums from "../../componenets/Albums/Albums";

const PhotosPage = () => {
    return (
        <div className={'photos-page'}>
            <div>
                <NavLinkMenu/>
            </div>
            <div className={'form-block'}>
                <FormAlbums/>
            </div>
            <div>
                <Albums/>
            </div>
        </div>
    );
};

export default PhotosPage;