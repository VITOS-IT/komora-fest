import React from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './TheaterInfo.module.css'
import {deleteTheater} from "../../../redusers/theaterReducer";

const TheaterInfo = ({currentId, setEditMode,isAuth}) => {

    const dispatch = useDispatch();
    const theater = useSelector((state) => currentId ? state.theaterReducer.find((t) => t._id === currentId) : null);
    console.log('heater ingfo ' + theater);
    return (
        <div>{!theater ? <span>theater ne znaydeno</span> :
            <div>
                {isAuth && <button onClick={() => {setEditMode(true)}}>Редагувати</button>}
                {isAuth&& <button onClick={()=>{dispatch(deleteTheater(theater._id))}}>Видалити</button>}
                    <h2>Театр: {theater.theaterName}</h2>
                <div className={s.theater}>
                    <div className={s.about_block}>
                        <h3>{theater.info}</h3>
                        <p>Пропонє до Вашої уваги виставу: {theater.performanceName}</p>
                        <p>Тривалість вистави {theater.duration} хвилин</p>
                        <h5>{theater.synopsis}</h5>
                    </div>
                    <div className={s.theater_img}>
                        <img src={theater.selectedImage} alt={'image'}/>
                    </div>
                </div>
            </div>}
        </div>

    )
}

export default TheaterInfo;