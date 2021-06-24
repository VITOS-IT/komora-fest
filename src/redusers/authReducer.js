import {loginUser, logoutUser} from "../api/api";

const SET_AUTH_DATA  = 'authReducer/SET_USER_DATA '
// const LOGOUT = 'authReducer/LOGOUT'
//
const initialState = {
    email: null,
    login: null,
    isAuth: false,
}
//
export const authReducer =  (state = initialState, action) =>{
    switch (action.type){
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const setAuthUserData = (email, login, isAuth) => ({
    type: SET_AUTH_DATA,
    payload: {email, login, isAuth}
});



export const login = (email, password) => async (dispatch) => {
    let response = await loginUser(email, password)
    if (response.resultCode === 0) {
        //success get auth data
        dispatch(setAuthUserData(email, password, true));
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'

    }
}



export const logout = () => async (dispatch) => {
    let response = await logoutUser()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, false));
    }
}