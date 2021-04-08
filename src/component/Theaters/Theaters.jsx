import React from "react";
import TheaterCard from "./Theater/TheaterCard";
import { useSelector } from 'react-redux';

import {Grid, CircularProgress, Container} from "@material-ui/core";
import useStyles from "./styles";

const Theaters = ({setCurrentId})=>{
    const s = useStyles();
    const theaters = useSelector((state)=>state.theaterReducer)
    console.log(theaters);
    return(
       !theaters.length ? <CircularProgress/> :(
           <Container  maxWidth={"md"}>
               <h2>Учасники</h2>
           <Grid className={s.mainContainer} container   spacing={3}>
               {
                   theaters.map((theater) => (
                       <Grid item key={theater._id} xs={12} sm={6} md={4}>
                           <TheaterCard theater={theater} setCurrentId={setCurrentId}/>
                       </Grid>
                   ))
               }

           </Grid>
           </Container>

               )
    )
}


export default Theaters