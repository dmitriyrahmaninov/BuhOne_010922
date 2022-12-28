import React from 'react';
import s from './style.module.sass'

export default function ServicesCard({id, title, img}) {

    const servicesCardStyle = { 
        backgroundImage: `url(${img})`
    }
    return (
        <div className={s.services_card} style={servicesCardStyle} >
            <p style={(id % 2 === 0) ? { color: 'white' } : { color: 'black' }}>{title}</p>
            <button style={(id % 2 === 0) ? { color: 'white' } : { color: 'black' }}>Подробнее</button>
        </div>
    )
}
