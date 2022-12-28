import React from 'react';
import { addService } from '../../store/reducer/serviceReducer';
import s from './style.module.sass';
import { useDispatch } from 'react-redux';

export default function AddServices() {

    const dispatch = useDispatch();
    
    const submit = event => {
        event.preventDefault();
        const { title_services } = event.target;
        dispatch(addService({title: title_services.value}));
        title_services.value = '';
    }

    return (
        <form onSubmit={submit} className={s.form_container}>
            <input type="text" placeholder='Наименование услуги' name="title_services" />
            <button>Добавить</button>
        </form>
    )
}
