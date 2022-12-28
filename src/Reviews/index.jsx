import React from 'react';
import s from './style.module.sass';

export default function Reviews({ text, avatar, name, position, display }) {
    
    return (
    <div>
            {
                display
                ?
                    <div className={s.block_review}>
                        <p>{text}</p>
                        <div className={s.info_review}>
                            <img src={avatar} alt="avatar" />
                            <div className={s.perconality_date}>
                                <p>{name}</p>
                                <p>{position}</p>
                            </div>
                        </div>
                    </div>  
                : ''
            }
    </div>
    )
}
