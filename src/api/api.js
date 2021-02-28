import axios from "axios";

const url = 'http://localhost:5000/theaters';

export const fetchTheater = () => axios.get(url)
export const createTheater = (newTheater) =>{
    axios.post(url, newTheater)
}
export const updateTheater = (id, updatedTheater) => axios.patch(`${url}/${id}`, updatedTheater);

export const deleteTheater = (id) => axios.delete(`${url}/${id}`)