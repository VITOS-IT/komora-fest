import {Container, AppBar, Typography, Grow, Grid, Button} from "@material-ui/core";

import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import TheaterForm from "../../../forms/TheaterForm";
import TheaterInfo from "../theaterInfo/TheaterInfo";
import {login} from "../../../redusers/authReducer";
import s from "../../sections/about/styles.module.css";
import {NavLink} from "react-router-dom";
import {deleteTheater} from "../../../redusers/theaterReducer";


const TheaterBlock = ({currentId, setCurrentId, editMode, setEditMode,isAuth}) => {

    // const theaterData = new URLSearchParams(window.location.pathname)
    // const theaterName = theaterData.toString().split('s%2F')[1].split('=')[0];
   //  console.log(currentId)
   //  let theater = useSelector((state)=>state.theaterReducer).filter(theater => theater.theaterName === theaterName)[0]
   //  debugger
    // if (!currentId){if (theater){setCurrentId(theater._id)}}
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
            <br/>
            {editMode ? isAuth&&<TheaterForm currentId={currentId} setCurrentId={setCurrentId}/>
                : <TheaterInfo isAuth={isAuth} currentId={currentId} setEditMode={setEditMode}/>}
        </div>
        </section>
    );
}

export default TheaterBlock;
