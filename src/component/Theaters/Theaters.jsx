import React from "react";
import TheaterCard from "./Theater/Theater";
import { useSelector } from 'react-redux';

import {Grid, CircularProgress} from "@material-ui/core";
import useStyles from "./styles";

const Theaters = ({setCurrentId})=>{
    const s = useStyles();
    const theaters = useSelector((state)=>state.theaterReducer)
    console.log(theaters);
    return(
       !theaters.length ? <CircularProgress/> :(
           <Grid className={s.mainContainer} container alignItems={"stretch"} spacing={3}>
               {
                   theaters.map((theater) => (
                       <Grid key={theater._id} item xs={12} sm={6}>
                           <TheaterCard theater={theater} setCurrentId={setCurrentId}/>
                       </Grid>
                   ))
               }

           </Grid>
       )
    )
}


export default Theaters