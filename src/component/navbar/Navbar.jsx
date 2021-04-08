import theaterLogo from '../../img/theatre-mask.jpg'
import s from './styles.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import cn from 'classnames'


const Navbar = () => {

    return (
        <>
            <header>
                <div className={s.wrapper}>
                    <NavLink to={'/'} className={s.logo}>KOMORA</NavLink>
                    <nav>
                        <ul className={s.nav}>
                            <li><NavLink to={'/theaters'} activeClassName={s.active}>УЧАСНИКИ</NavLink></li>
                            <li><NavLink to={'/'} activeClassName={s.active}>ІСТОРІЯ</NavLink></li>
                            <li><NavLink to={'/'} activeClassName={s.active}>ПРО НАС</NavLink></li>
                        </ul>
                    </nav>
                    <button>Log in</button>
                </div>
            </header>
            <section className={s.banner}>

                <div className={s.wrapper}>
                    <div className={s.bannerContent}>
                        <div className={s.bannerText}>
                            <span className={cn(s.number, s.bannerInfo)}>7-ий</span>
                            <div className={s.bannerInfo}>Театральний фестиваль</div>
                            <h5 className={s.bannerInfo}>"КОМОРА"</h5>
                            <span className={cn(s.number, s.bannerInfo)}>18 - 21 жовтня</span>
                        </div>
                        <button>ПОДАТИ ЗАЯВКУ</button>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Navbar
