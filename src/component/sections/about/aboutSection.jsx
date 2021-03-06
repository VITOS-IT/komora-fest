import React from "react";
import s from './styles.module.css'


const AboutSection = () => {
    return (
            <section className={s.section}>
                <div className={s.wrapper}>
                    <h2>Про фестиваль</h2>
                    <p className={s.aboutText}>Відкритий театральний
                        фестиваль «Комора» проводиться з 2015 року в найкращому місті Кам’янець-Подільський, це невелике
                        старовинне місто з глибокою історією. Фестиваль відбувається кожного року в другій половині
                        жовтня,
                        географія учасників фестивалю за 4 роки існування охоплює всі регіони України, а в 2017 році
                        долучилися також учасники з Польщі. В рамках фестивалю проводяться майстер класи різного
                        спрямування, цікаві заходи та зустрічі. В 2018 році на фестивалі приймали участь 18 театрів зі
                        всієї
                        України: Київ, Харків, Рівне, Конотоп, Дніпро, Шостка, Пісочин, Червоноград, Чернівці,
                        Кам′янець-Подільський.</p>
                    <p className={s.aboutText}>
                        У фестивалі «Комора» беруть участь театри незалежно від їх статусу: театри-студії, студентські
                        театри профільних вузів, незалежні професійні театри, народні театри, академічні театри, а також
                        незалежно від жанру, в якому вони працюють.</p>
                </div>
            </section>
    )
}

export default AboutSection