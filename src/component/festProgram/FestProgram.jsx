import React, {useState} from "react";
import s from "./style.module.css"
import cn from "classnames"
import {useSelector} from "react-redux";
import FestProgramItem from "./FestProgramItem/FestProgramItem";

const TAB_DATA = [18, 19, 20, 21];

const Tabs = () => {
    const theaters = useSelector((state)=>state.theaterReducer)
    debugger
    let initialState = theaters.map(t => ({...t, date : new Date( Date.parse(t.date))}))
    initialState.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
    });

    console.log(`date frrom : ` + initialState[0].date);
    const [active, setActive] = useState(0)
    // const theaters = useSelector((state) => state.theaterReducer)
    const clickHandler = (e) => {

        setActive(parseInt(e.currentTarget.attributes.num.value))
    }
    let content = "";

    return (
        <section className={s.progSection}>
            <div className={s.tabs}>
                <h2>Програма фестивалю</h2>
                <menu >
                    <ul>
                        {TAB_DATA.map((label, i) => {

                            const text = initialState.filter(theater => theater.date.getDate() === label)

                            content = active === i ? text : content;
                            return <li
                                className={active === i ? cn(s.tab, s.active) : s.tab}
                                key={label}
                                num={i}
                                onClick={clickHandler}>
                                {label} - 10 - 2021
                            </li>
                        })
                        }
                    </ul>
                </menu>
                <div>
                    { content.map(t => (<FestProgramItem theater={t}/>))}
                </div>
            </div>
        </section>
    );

}

export default Tabs