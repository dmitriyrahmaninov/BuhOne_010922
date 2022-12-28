import React from 'react';
import s from './style.module.sass'

export default function Footer() {
    return (
        <section className={[s.footer, 'wrapper'].join(' ')}>
            <p>2019 (с) Все права защищены. БухОне.ру</p>
            <p>Разработано: BuhOne</p>
        </section>
    )
}
