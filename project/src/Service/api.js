import axios from 'axios';

const url = "http://localhost:8000/users";

export const getUsers = async () =>{
    return await axios.get(url);
}

export const addUser = async(user) => {
    return await axios.post(`${url}/add`, user);
}

export const deleteUser = async(id) =>{
    return await axios.delete(`${url}/${id}`);
}