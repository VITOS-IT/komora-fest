import * as api from '../api/api'

const FETCH_ALL = 'theaterReducer/FETCH_ALL'
const CREATE_THEATER = 'theaterReducer/CREATE_THEATER'
const UPDATE_THEATER = 'theaterReducer/UPDATE_THEATER'
const DELETE_THEATER = 'theaterReducer/DELETE_THEATER'
const GET_THEATER = 'theaterReducer/GET_THEATER'

const initialState = [{
    _id: '603bcdfac47d1e0d7c3fee9sds8',
    theaterName: "Tandem",
    email: "vitos.iva@gmail.com",
    city: "K-Podilskiy",
    performanceName: "Garnir",
    genre: "Comedie",
    duration: 70,
    director: "Galina",
    synopsis: "erfldm;n;;  jldfshgiusfhgdfunfi fiughkfh fgkhkgh kfj",
    info: "from 2011 year",
    date: new Date(2021, 9, 19, 13,45)
},
{
    _id: '603bcdfac47dfd1e0d7c3fee98',
    theaterName: "Tandem",
    email: "vitos.iva@gmail.com",
    city: "K-Podilskiy",
    performanceName: "Garnir",
    genre: "Comedie",
    duration: 60,
    director: "Galina",
    synopsis: "erfldm;n;;  jldfshgiusfhgdfunfi fiughkfh fgkhkgh kfj",
    info: "from 2011 year",
    date: new Date(2021, 9, 19, 15,45)
},
{
    _id: '603bcdfac4wf7d1e0d7c3fee98',
    theaterName: "Tandem",
    email: "vitos.iva@gmail.com",
    city: "K-Podilskiy",
    performanceName: "Garnir",
    genre: "Comedie",
    duration: 70,
    director: "Galina",
    synopsis: "erfldm;n;;  jldfshgiusfhgdfunfi fiughkfh fgkhkgh kfj",
    info: "from 2011 year",
    date: new Date(2021, 9, 18, 13,45)
},
{
    _id: '603bcdfac47323d1e0d7c3fee98',
    theaterName: "Tandem",
    email: "vitos.iva@gmail.com",
    city: "K-Podilskiy",
    performanceName: "Garnir",
    genre: "Comedie",
    duration: 70,
    director: "Galina",
    synopsis: "erfldm;n;;  jldfshgiusfhgdfunfi fiughkfh fgkhkgh kfj",
    info: "from 2011 year",
    date: new Date(2021, 9, 18, 11,45)
}
]
export const theaterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_THEATER:
            return [...state, action.payload];
        case UPDATE_THEATER:
            return state.map((t) => t._id === action.payload._id ? action.payload : t);
        case DELETE_THEATER:
            return state.filter((t) => t._id !== action.payload)
        case GET_THEATER:
            return action.payload;
        case FETCH_ALL:
            return action.payload;
        default:
            return state;
    }

}

//Actions Creators
export const getTheaters = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTheater();

        dispatch({type: FETCH_ALL, payload: data})
    } catch (e) {
        console.log(e)
    }
}
export const getTheater = (name) => async (dispatch) => {
    try {
        console.log('get theater before');

        const {data} = await api.getTheater(name);
        console.log('get theater');
        dispatch({type: GET_THEATER, payload: data})
    } catch (e) {
        console.log(e)
    }
}
export const createTheater = (theater) => async (dispatch) => {
    try {
        const {data} = await api.createTheater(theater);
        dispatch({type: CREATE_THEATER, payload: data})
    } catch (e) {
        console.log(e.message)
    }
}
export const updateTheater = (id, theater) => async (dispatch) => {
    try {
        const {data} = await api.updateTheater(id, theater);
        dispatch({type: UPDATE_THEATER, payload: data})
    } catch (e) {
        console.log(e.message)
    }
}
export const deleteTheater = (id) => async (dispatch) => {
    try {
        await api.deleteTheater(id);
        dispatch({type: DELETE_THEATER, payload: id})
    } catch (e) {
        console.log(e)
    }
}
