import './App.css';
import theaterLogo from './img/theatre-mask.jpg'
import ss from './App.module.css'
import Theaters from "./component/Theaters/Theaters";
import useStyles from './styles'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getTheaters} from "./redusers/theaterReducer";
import Navbar from "./component/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import TheaterBlock from "./component/Theaters/theaterBlock/TheaterBlock";
import AboutSection from "./component/sections/about/aboutSection";
import Sponsors from "./component/sections/sponsors/Sponsors";
import Contacts from "./component/sections/contacts/Contacts";
import Tabs from "./component/festProgram/FestProgram";
import Activities from "./component/sections/activities/Activities";


function App() {
    const s = useStyles();
    const dispatch = useDispatch();
    const isAuth = useSelector((state)=>state.authReducer.isAuth)
    const [currentId, setCurrentId] = useState(null)
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        dispatch(getTheaters());
    }, [dispatch, currentId,isAuth])
    return (
        <>
            <Navbar isAuth={isAuth}/>
            <Switch>
            <Route exact path="/">

                <AboutSection/>
                 <Tabs/>
                <Activities/>
            </Route>
            <Route exact path="/theaters">
                <Theaters setCurrentId={setCurrentId} setEditMode={setEditMode} isAuth={isAuth}/>
            </Route>
            <Route path="/theaters/:id?"> \
                <TheaterBlock isAuth={isAuth} currentId={currentId} setCurrentId={setCurrentId} editMode={editMode} setEditMode={setEditMode}/>
            </Route>
            <Route path="/*">404 not found</Route>
                </Switch>
            <Sponsors/>
            <Contacts/>
        </>


    );
}

export default App;
