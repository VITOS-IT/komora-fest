import React from "react";
import s from "./sponsors.module.css"
import dnd from "../../../img/sponsors/D&D.gif"
import agro from "../../../img/sponsors/Агросолюшнс.gif"
import energix from "../../../img/sponsors/Енерджікс.gif"
import link from "../../../img/sponsors/Лінк.gif"
import farm from "../../../img/sponsors/МаксФарм.gif"
import starhause from "../../../img/sponsors/СтарХаус.gif"
import podolanun from "../../../img/sponsors/Подолянин.gif"

const Sponsors = () => {

    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <h2>Наші партнери</h2>
                <a target="_blank">
                    <img style={{width: "10%"}} alt="1" src={dnd}/>
                </a>
                <a target="_blank">
                    <img style={{width: "10%"}} alt="1" src={farm}/>
                </a>
                <a target="_blank">
                    <img style={{width: "20%"}} alt="1" src={agro}/>
                </a>
                <a target="_blank">
                    <img style={{width: "10%"}} alt="1" src={dnd}/>
                </a>
                <a target="_blank">
                    <img style={{width: "10%"}} alt="1" src={link}/>
                </a>
                <a target="_blank">
                    <img style={{width: "20%"}} alt="1" src={energix}/>
                </a>
                <a target="_blank">
                    <img style={{width: "20%"}} alt="1" src={podolanun}/>
                </a>

                <a target="_blank">
                    <img style={{width: "20%"}} alt="1" src={starhause}/>
                </a>
            </div>
        </section>
    )
}

export default Sponsors