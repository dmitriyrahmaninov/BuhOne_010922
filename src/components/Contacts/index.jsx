import React from 'react';
import s from './style.module.sass';
import background from './media/Rectangle.png' 

export default function Contacts() {

    return (
        <section style ={{backgroundImage: `url(${background})`}}>
            <div className={['wrapper', s.wrapper].join(' ')}>
                
                <div className={s.block_info}>
                    <div className={s.header_contact}>
                        <h2>Связь с нами</h2>
                        <p>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
                    </div>
                    <div className={s.info_contacts}>
                        <div className={s.phone_cont}>
                            <i class="fa-solid fa-phone"></i>
                            <p>+7 (111) 222-33-44</p>
                        </div>
                        <div className={s.email}>
                            <i class="fa-solid fa-envelope"></i>
                            <a className={s.email_a} href="https://www.figma.com/file/sicu3MPWiWYhmzlbO10hwB/grid-with-buttons?node-id=1%3A144">order@bu-one.ru</a>
                        </div>
                    </div>
                </div>

                <div className={s.form_contact}>
                    <form>
                        <div className={s.container_name_last_name}>
                            <div className={s.name}>
                                <p>Имя</p>
                                <input type="text" title='first_name' placeholder='Иван' />
                            </div>
                            <div className={s.last_name}>
                                <p>Фамилия</p>
                            <input type="text" name="last_name" placeholder='Иванов ' />
                            </div>
                        </div>
                        <div className={s.message}>
                            <p>Сообщение</p>
                            <textarea type="text" name='message' placeholder='Ваше сообщение'/>
                        </div>
                    </form>
                    <button>Отправить сообщение</button>
                </div>
            </div>
        </section>
    )
}
