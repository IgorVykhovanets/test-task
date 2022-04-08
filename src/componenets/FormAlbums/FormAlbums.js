import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import './form.albums.modules.css'
import {getAlbums} from "../../store/slice/albums.slice";
import {joiResolver} from "@hookform/resolvers/joi";
import {validatorFormAlbums} from "../../validator/validator-form-albums";


const FormAlbums = () => {

    const {handleSubmit, reset, register, formState: {errors}} = useForm({
        resolver: joiResolver(validatorFormAlbums),
        mode: "onTouched"
    });

    let dispatch = useDispatch();

    const submit = (data) => {
        dispatch(getAlbums(data.id));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={'form-block-id'}>
                <div className={'error-msg-block'}>{errors.id && errors.id.message}</div>
                <input type="number" placeholder={'albums id'} {...register('id')}/>
                <button className={'button-form'}>get photos</button>
            </form>
        </div>
    );
};

export default FormAlbums;