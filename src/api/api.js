import axios from "axios";

const url = 'http://localhost:5000/theaters';

// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     withCredentials: true,
//     headers:{
//         "API-KEY" : '2a3b6361-7a2b-407a-a076-d17f7c8d9e32'
//     }
// })

export const fetchTheater = () => axios.get(url)
export const getTheater = (id) => axios.get(`${url}/${id}`)
export const createTheater = (newTheater) =>{
    axios.post(url, newTheater)
}
export const updateTheater = (id, updatedTheater) => axios.patch(`${url}/${id}`, updatedTheater);

export const deleteTheater = (id) => axios.delete(`${url}/${id}`)

// export const authAPI = {
//     login(email, password, rememberMe= false){
//         // return axios.post(`auth/login`, {email, password, rememberMe});
//         return true
//     },
//     logout(){
//         // return axios.delete(`auth/login`);
//         return {resultCode: 0}
//     }
// }
export const logoutUser =() => { return {resultCode: 0} }
export const loginUser =() => { return {resultCode: 0} }
