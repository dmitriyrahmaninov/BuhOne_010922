import React from 'react';
import s from './style.module.sass';
import { useDispatch } from 'react-redux';
import { addNewReview } from '../../store/reducer/reviewReducer';

export default function AddReview() {

    const dispatch = useDispatch();

    const submit = event => {
        event.preventDefault();
        const { name, position, link, review } = event.target;
        dispatch(addNewReview({
            name: name.value,
            position: position.value,
            avatar: link.value,
            text: review.value
        }))
    }

    return (
        <form onSubmit={submit} className={s.container}>
            <div className={s.about_person}>
                <input type="text" name='name' placeholder='Ваше имя' />
                <input type="text" name='position' placeholder='Должность' />
                <input type="text" name='link' placeholder='Ссылка на фото' />
            </div>
            <div className={s.text_review}>
                <textarea type="text" name='review' placeholder='Отзыв' />
                <button>Добавить</button>
            </div>
        </form>
    )
}
