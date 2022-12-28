import React from 'react';
import s from './style.module.sass'
import { LeftSquareFilled, RightSquareFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { scrollForwardAction } from '../../store/reducer/reviewReducer';
import Circle from '../Circle';

export default function Slider() {

    const state = useSelector(state => state.reviews);

    const dispatch = useDispatch();
    const scrollForward = () => {
        state.map((el, index) => {
            const current_review = state.find(el => el.display === true);
            // el.display = false;
            
            if (current_review) {
                let current_index = index;
                console.log(current_index);
                state[current_index].display = false
                console.log(state[current_index])

                const next_index = ++current_index;
                console.log(next_index);
                
                const next_id_review = (state[next_index].id);
                console.log(state[next_index])
                
                return dispatch(scrollForwardAction(next_id_review))
            }
            // return el
        })
    }


    return (
        <div className={s.slider_container}>
            <div className={s.slider_circle}>
                {
                    state.map(el => <Circle key={el.id} {...el}/>)
                }
            </div>
            <div className={s.slider_btn}>
                <LeftSquareFilled className={s.left_btn} />
                <RightSquareFilled className={s.right_btn} onClick={() => scrollForward()} />
            </div>
        </div>
    )
}
