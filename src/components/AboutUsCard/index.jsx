import React from 'react';
import s from './style.module.sass'

export default function AboutUsCard({value, title, link_title, link_url}) {
    const value_style = {
        fontSize: 55
    }

    const title_style = {
        fontSize: 14,
        width: '107px'
    }


    return (
        <div className={s.card}>
            <p style={value_style}>{value}</p>
            <p style={title_style}>{title}</p>
            <a href={link_url}>{link_title}</a>
            <button>Подробнее</button>
        </div>
    )
}
