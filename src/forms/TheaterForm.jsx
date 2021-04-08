import React, {useEffect, useState} from "react";
import useStyles from './styles'
import {Paper, TextField, Button, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {createTheater, updateTheater} from "../redusers/theaterReducer";
import FileBase from "react-file-base64";


const TheaterForm = ({currentId,setCurrentId})=>{
    const s = useStyles();
    const state = {
        theaterName: '',
        email: '',
        city: '',
        performanceName: '',
        genre: '',
        duration: '',
        director: '',
        synopsis: '',
        info: '',
        selectedImage:'',
        date: new Date()
    };
    const [theaterData, setTheaterData] = useState(state);
    const dispatch = useDispatch();
    const theater = useSelector((state)=>currentId ? state.theaterReducer.find((t)=>t._id === currentId) : null);

    useEffect(()=>{
        if (theater) setTheaterData(theater)
        console.log(theaterData)
    },[theater])

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (currentId){
            dispatch(updateTheater(currentId, theaterData))
        }else {
            console.log(theaterData)
            dispatch(createTheater(theaterData))
        }
        clear();
    }
    const clear = () =>{
        setCurrentId(0);
        setTheaterData({...state});
    }
    return(
        <Paper className={s.paper}>
            <form autoComplete={'off'} className={`${s.form} ${s.root}`} onSubmit={handleSubmit}>
<Typography variant='h5'>{ currentId ? 'Редагувати колектив' : 'Додати колектив'}</Typography>
                <TextField name='email' variant="outlined" label='Eлектронна пошта' fullWidth value={theaterData.email} onChange={(e)=> setTheaterData({...theaterData, email: e.target.value})}/>
                <TextField name='theaterName' variant="outlined" label='Назва колективу' fullWidth value={theaterData.theaterName} onChange={(e)=> setTheaterData({...theaterData, theaterName: e.target.value})}/>
                <TextField name='city' variant="outlined" label='Місто' fullWidth value={theaterData.city} onChange={(e)=> setTheaterData({...theaterData, city: e.target.value})}/>
                <TextField name='performanceName' variant="outlined" label='Назва вистави' fullWidth value={theaterData.performanceName} onChange={(e)=> setTheaterData({...theaterData, performanceName: e.target.value})}/>
                <TextField name='genre' variant="outlined" label='Жанр' fullWidth value={theaterData.genre} onChange={(e)=> setTheaterData({...theaterData, genre: e.target.value})}/>
                <TextField name='duration' variant="outlined" label='Тривалість' fullWidth value={theaterData.duration} onChange={(e)=> setTheaterData({...theaterData, duration: e.target.value})}/>
                <TextField name='director' variant="outlined" label='Режисер' fullWidth value={theaterData.director} onChange={(e)=> setTheaterData({...theaterData, director: e.target.value})}/>
                <TextField name='synopsis' variant="outlined" label='Синопсис' fullWidth value={theaterData.synopsis} onChange={(e)=> setTheaterData({...theaterData, synopsis: e.target.value})}/>
                <TextField name='info' variant="outlined" label='Інформація про колектив' fullWidth value={theaterData.info} onChange={(e)=> setTheaterData({...theaterData, info: e.target.value})}/>

                <TextField name='date' type="datetime-local" variant="outlined" fullWidth
                           onChange={(e)=> {setTheaterData({...theaterData, date: e.target.value})}}/>

                <div className={s.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64})=>setTheaterData({...theaterData, selectedImage: base64})} />
                </div>
                <Button className={s.buttonSubmit} variant={"contained"} type={"submit"} color={"primary"} fullWidth size={"large"}>Підтвердити</Button>
                <Button variant={"contained"} color={"secondary"} size={"large"} onClick={clear} fullWidth>Очистити форму</Button>
            </form>

        </Paper>
 )
}

export default TheaterForm