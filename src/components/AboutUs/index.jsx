import React from 'react';
import s from './style.module.sass';
import AboutUsCard from '../AboutUsCard';
import {data} from './data'

export default function AboutUs() {

    const color_h2 = {
        color: '#005FA3'
    }
    return (
        <section>
            <div className={['wrapper', s.wrapper].join(' ')}>
                <p className={s.subheader}>О нас</p>
                
                <div className={s.block}>
                    <div className={s.block_info}>
                        <div className={s.name_aboutUs_info}>
                            <h2>Компания <span style={color_h2}>ИвановПром</span></h2>
                        </div>
                        <div className={s.aboutUs_info}>
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
                        </div>
                    </div>
                    <div className={s.aboutUs_block}>
                    {
                        data.map(el => <AboutUsCard key={el.id} {...el} />)
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}
