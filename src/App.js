import './App.css';
import theaterLogo from './img/theatre-mask.jpg'
import ss from './App.module.css'
import Theaters from "./component/Theaters/Theaters";
import useStyles from './styles'
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {getTheaters} from "./redusers/theaterReducer";
import Navbar from "./component/navbar/Navbar";
import {Route} from "react-router-dom";
import TheaterBlock from "./component/Theaters/theaterBlock/TheaterBlock";
import AboutSection from "./component/sections/about/aboutSection";
import Sponsors from "./component/sections/sponsors/Sponsors";
import Contacts from "./component/sections/contacts/Contacts";
import Tabs from "./component/festProgram/FestProgram";
import Activities from "./component/sections/activities/Activities";


function App() {
    const s = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getTheaters());
    }, [dispatch, currentId])
    return (
        <>
            <Navbar/>
            <Route exact path="/">

                <AboutSection/>
                 <Tabs/>
                <Activities/>
            </Route>
            <Route path="/theaters">
                <Theaters setCurrentId={setCurrentId}/>
            </Route>
            <Route path="/theater/:id?"> \
                <TheaterBlock currentId={currentId} setCurrentId={setCurrentId}/>
            </Route>


            <Sponsors/>
            <Contacts/>
        </>


    );
}

export default App;
