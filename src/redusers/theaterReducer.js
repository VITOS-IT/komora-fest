import * as api from '../api/api'

const FETCH_ALL = 'theaterReducer/FETCH_ALL'
const CREATE_THEATER = 'theaterReducer/CREATE_THEATER'
const UPDATE_THEATER = 'theaterReducer/UPDATE_THEATER'
const DELETE_THEATER = 'theaterReducer/DELETE_THEATER'


export const theaterReducer = (state = [], action) =>{
    switch (action.type) {
        case CREATE_THEATER:
            return [...state, action.payload];
        case UPDATE_THEATER:
            return state.map((t) => t._id === action.payload._id ? action.payload : t);
        case DELETE_THEATER:
            return state.filter((t) => t._id !== action.payload)
        case FETCH_ALL:
            return action.payload;
        default:
            return state;
    }

}

//Actions Creators
export const getTheaters = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchTheater();
        console.log('creaotr');
        console.log(data);
        dispatch({type: FETCH_ALL, payload: data })
    }catch (e) {
        console.log(e)
    }
}
export const createTheater =(theater) =>async (dispatch) =>{
    try {
        const {data} = await api.createTheater(theater);
    dispatch({type: CREATE_THEATER, payload: data})
    }catch (e) {
        console.log(e.message)
    }
}
export const updateTheater = (id, theater) => async (dispatch) =>{
    try {
        const {data} = await api.updateTheater(id, theater);
        dispatch({type: UPDATE_THEATER, payload: data})
    }catch (e) {
        console.log(e.message)
    }
}
export const deleteTheater = (id) => async (dispatch) =>{
    try {
        await api.deleteTheater(id);
        dispatch({type: DELETE_THEATER, payload: id})
    }catch (e) {
        console.log(e)
    }
}
