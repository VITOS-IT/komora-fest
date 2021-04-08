import React, {useEffect, useState} from "react";
import {getTheater, getTheaters} from "../../../redusers/theaterReducer";
import {useDispatch, useSelector} from "react-redux";

const TheaterInfo = ({currentId}, props) =>{
    // const theater = useSelector((state)=>currentId ? state.theaterReducer.find((t)=>t._id === currentId) : null);

    const dispatch = useDispatch();

    const getTheaterlistener = ()=>{

        console.log('send get theater')
    }
    useEffect(() => {

    },[ ])
    return(
        <div>
       <button onClick={()=>{getTheaterlistener()}}>get theater</button>
        </div>

    )
}

export default TheaterInfo;