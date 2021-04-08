import React from "react"
import s from "./contacts.module.css";

const Contacts = () => {

    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <h2>Контакти</h2>
                <div className={s.contactContent}>
                    <div className={s.contactItem}>
                        <iframe className={s.contactLocation}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.942071300285!2d26.58070466798585!3d48.67493150590659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x942532fe4eaaf964!2z0JrQsNC80Y_QvdC10YbRjC3Qn9C-0LTRltC70YzRgdGM0LrQuNC5INGA0LDQudC-0L3QvdC40Lkg0YbQtdC90YLRgCDQutGD0LvRjNGC0YPRgNC4INGWINC80LjRgdGC0LXRhtGC0LIgwqvQoNC-0LfQvNCw0LnCuw!5e0!3m2!1suk!2sua!4v1615269760074!5m2!1suk!2sua"
                            style={{width: "400px", height: "300px"}} allowFullScreen="" loading="lazy"/>
                    </div>
                    <div className={s.contactItem}>
                        <p>
                            Бажаєте дізнатись детальнішу інформацію про будь-який із аспектів проведення фестивалю?
                            Напишіть нам листа або зателефонуйте, і ми з радістю допоможемо вам.
                        </p>
                        <p>Телефон: +38 (098) 576 22 28</p>
                        <p>Email: komorafest@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts