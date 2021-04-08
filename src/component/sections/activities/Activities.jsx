import React from "react";
import s from './Activities.module.css'
import fonImage from '../../../img/background.jpg'
import performanceImage from '../../../img/performance.jpg'
import masterClass from '../../../img/masterclass.jpg'

const Activities = () => {

    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <h2>Activities</h2>
                <div className={s.grid}>
                    <div className={s.gridItem}>
                            <img className={s.cardImg} src={performanceImage} alt="Performance"/>
                            <div className={s.cardContent}>
                                <h3 className={s.cardHeader}>Вистави</h3>
                                <p className={s.cardText}>
                                    Понад двадцять найрізноманітніших вистав з усіх куточків України, і не тільки, для
                                    дорослих і дітей. Обмежень щодо жанру, режисерського вирішення та тематики
                                    постановок немає. Ми прагнемо зробити театр близьким та доступним для всіх!
                                </p>
                            </div>
                    </div>
                    <div className={s.gridItem}>
                            <img className={s.cardImg} src={masterClass} alt="MasterClass"/>
                            <div className={s.cardContent}>
                                <h3 className={s.cardHeader}>Майстер-класи</h3>
                                <p className={s.cardText}>
                                    В рамках фестивалю проводяться майстер класи різного спрямування: акторська
                                    майстерність, сценічна пластика, сценічна мова, хореографія і т.д.
                                    Основні майстер класи проводять члени нашого професійного журі,
                                    або запрошені спеціалісти.
                                </p>
                            </div>
                    </div>
                    <div className={s.gridItem}>
                            <img className={s.cardImg} src={fonImage} alt="Сommunication"/>
                            <div className={s.cardContent}>
                                <h3 className={s.cardHeader}>Спілкування</h3>
                                <p className={s.cardText}>
                                    На фестивалі можна поспілкуватись з різними колективами, та обмінятися досвідом
                                </p>
                            </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Activities