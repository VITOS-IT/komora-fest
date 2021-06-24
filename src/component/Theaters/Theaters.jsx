import React, {useEffect} from "react";
import TheaterCard from "./Theater/TheaterCard";
import {useDispatch, useSelector} from 'react-redux';

import {Grid, CircularProgress, Container} from "@material-ui/core";
import useStyles from "./styles";
import s from "./Theaters.module.css";
import performanceImage from "../../img/performance.jpg";
import masterClass from "../../img/masterclass.jpg";
import fonImage from "../../img/background.jpg";
import {getTheaters} from "../../redusers/theaterReducer";
import {NavLink} from "react-router-dom";

const Theaters = ({setCurrentId, setEditMode,isAuth}) => {
    // const s = useStyles();
    const dispatch = useDispatch();
    setCurrentId(null)
    setEditMode(false)
    const theaters = useSelector((state) => state.theaterReducer)
    useEffect(() => {
        dispatch(getTheaters());
    }, [])
    console.log(theaters);
    return (
        !theaters.length ? <CircularProgress/> :
            (
                <section className={s.section}>
                    <div className={s.wrapper}>

                        <h2>Учасники</h2>
                        {isAuth &&
                        <NavLink to={'theaters/new'}>
                            <button className={s.add_theater} onClick={()=>{setEditMode(true)}}>Додати колектив</button>
                        </NavLink>
                        }
                            <div className={s.grid}>
                            {
                                theaters.map((theater) => (
                                        <TheaterCard theater={theater} setCurrentId={setCurrentId}/>
                                ))
                            }
                        </div>
                    </div>
                </section>
            )
    )
}


export default Theaters