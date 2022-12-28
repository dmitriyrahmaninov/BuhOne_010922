import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../Slider';
import s from './style.module.sass';
import Review from '../../Reviews';
import AddReview from '../AddReview'


export default function ReviewsContainer() {

    const state = useSelector(state => state.reviews);

    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className={s.subheader}>Отзывы</p>
            <h2>Ваши благодарности</h2>
            {
                state.map(el => <Review key={el.id} {...el} />)
            }
            <AddReview/>
            <Slider/>
        </div>
    )
}
