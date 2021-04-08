import React from "react";


const FestProgramItem = ({theater}) =>{

    let duration = new Date();
        duration.setTime(theater.date.getTime() + theater.duration * 60000)
    return(
        <p>
           {theater.date.getHours()}:{theater.date.getMinutes()} - {duration.getHours()}:{duration.getMinutes()}
            <span>  {theater.theaterName} : {theater.performanceName}</span>
        </p>
    )
}

export default FestProgramItem