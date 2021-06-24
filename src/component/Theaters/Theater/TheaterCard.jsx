import React from "react";
import s from './TheaterCard.module.css';
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import performanceImage from "../../../img/performance.jpg";
import background from '../../../img/DSC_0504-min.JPG'
import {deleteTheater} from "../../../redusers/theaterReducer";



const TheaterCard = ({theater, setCurrentId}) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className={s.gridItem}>
                <div className={s.card_top} style={{
                    backgroundImage: `url(${theater.selectedImage || background})`
                }}>
                    <div className={s.theater_name}>
                        Театр: {theater.theaterName}
                    </div>
                    <div className={s.theater_sity}>
                        м. {theater.city}
                    </div>
                </div>
                <div className={s.card_bottom}>
                    <div className={s.performance}>
                        {theater.performanceName}
                    </div>
                    <span>{theater.genre}, {theater.synopsis}</span>
                    <div className={s.director}>
                        Режисер: {theater.director}
                    </div>
                </div>
                <NavLink to={`/theaters/${theater.theaterName}`} onClick={() => {setCurrentId(theater._id)}} >
                    <button>Детально</button></NavLink>
                {/*<button onClick={()=>{dispatch(deleteTheater(theater._id))}}>Delete</button>*/}
            </div>
        </>
    )
}


export default TheaterCard