import {Container, AppBar, Typography, Grow, Grid, Button} from "@material-ui/core";

import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {getTheaters} from "../../../redusers/theaterReducer";
import TheaterForm from "../../../forms/TheaterForm";
import TheaterInfo from "../theaterInfo/TheaterInfo";
import {NavLink} from "react-router-dom";


const TheaterBlock = ({currentId, setCurrentId}) => {
    const [editMode, setEditMode] = useState(true);
    return (
        <div>
            <Button color="primary" variant="contained" size={"small"} onClick={() => {setEditMode(!editMode)}}>Edit mode</Button>


            {editMode ? <TheaterForm currentId={currentId} setCurrentId={setCurrentId}/>
                : <TheaterInfo currentId={currentId}/>}
        </div>
    );
}

export default TheaterBlock;
