import React from 'react';
import {useForm} from "react-hook-form";
import {addTodo} from "../../store/slice/todos.slice";
import {useDispatch} from "react-redux";

import './form.todos.modules.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {validatorTodoForm} from "../../validator/validator-todo-form";


const FormTodos = () => {

    const {handleSubmit, reset, register, formState: {errors}} = useForm({
        resolver: joiResolver(validatorTodoForm),
        mode: "onTouched"
    });


    let dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addTodo(data));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={'form-todo-block'}>
                <div className={'error-msg-block'}>{errors.todo && errors.todo.message}</div>
                <input type="text" placeholder={'todo'} {...register('todo')}/>
                <button className={'button-form'}>send</button>
            </form>
        </div>
    );
};

export default FormTodos;