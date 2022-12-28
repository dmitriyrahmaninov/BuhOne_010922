import React, { useRef } from 'react';
import s from './style.module.sass';
import logo from './media/buh_one_logo.png'

export default function NavBar() {

    const header_menu_ref = useRef();

    const nav_btn_click = () => {
        header_menu_ref.current.classList.toggle(s.active);
    }

    return (
        <nav className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.logo}>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div> 
            <div className={s.header_menu}>
                <button onClick={nav_btn_click}><i class={["fa-solid fa-bars", s.open_header_menu].join(' ')}></i></button>
                <ul ref={header_menu_ref} className={s.nav_menu}>
                    <li>Главная</li>
                    <li>услуги</li>
                    <li>кейсы</li>
                    <li>о компании</li>
                    <li>контакты</li>
                </ul>
            </div>
        </nav>
    )
}
