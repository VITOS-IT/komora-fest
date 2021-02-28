// import { reducers } from './reducers';
import App from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {reducers} from './redusers/redux-store'
import {BrowserRouter} from "react-router-dom";

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
// </React.StrictMode>,
document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
