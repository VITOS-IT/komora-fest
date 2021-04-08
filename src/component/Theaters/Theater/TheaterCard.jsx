import React from "react";

import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyles from './styles';
import {useDispatch} from "react-redux";
import {deleteTheater} from "../../../redusers/theaterReducer";
import {NavLink} from "react-router-dom";
// import {ThumbUpAltIcon} from '@material-ui/icons'
const TheaterCard = ({theater, setCurrentId}) => {
    const s = useStyles();

    const dispatch = useDispatch();

    return (
        <Card className={s.card}>
            <CardMedia className={s.media} image={theater.selectedImage} title={theater.theaterName}/>
            <div className={s.overlay}>
                <Typography className={s.title} variant={"h5"} gutterBottom>{theater.theaterName}</Typography>

            </div>
            <div className={s.overlay2}>
                <NavLink to={'/theater/' + theater.theaterName}>
                <Button style={{color: 'red'}} size={"small"} onClick={() => { setCurrentId(theater._id)}}>
                    <MoreHorizIcon fontSize={"default"}/>
                </Button>
                </NavLink>
                <Typography className={s.title} variant={"h6"} gutterBottom>{theater.city}</Typography>

            </div>

            <div className={s.details}>
                <Typography variant={"h6"}>Вистава: {theater.performanceName}</Typography>
                <Typography variant={"body2"} color={"textSecondary"}>{theater.genre}</Typography>
            </div>
            <CardContent>
                <Typography variant={"h6"}>{theater.director}</Typography>
            </CardContent>
            <CardActions className={s.cardActions}>
                <Button size={"small"} color={"primary"} onClick={() => { dispatch(deleteTheater(theater._id))}}>delete</Button>
            </CardActions>
        </Card>
    )
}


export default TheaterCard