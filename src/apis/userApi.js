import axios from 'axios';
const token = localStorage.getItem('auth');
export const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token && token}`
}
// const API_KEY = 'b5b14cc19b1044b4a6745565b1b45297'
// const userEndPoint = `api/${API_KEY}/unicorns`;

const userEndPoint = 'http://localhost:8000/users';

export const addEmployee = async (data,headers) => {
    try {
        console.log("data", data)
        const response = await axios.post(userEndPoint, data, {headers: headers});
        return response;
        } 
    catch (error) {
        return error;
    }
}

export const getEmployee = async (headers) => {
    try {
        const response = await axios.get(userEndPoint, {headers: headers});
        return response;
        } 
    catch (error) {
        return error;
    }
}

export const updateEmployee = async (data,headers) => {
    try {
        const response = await axios.put(`${userEndPoint}/${data.id}`, data, {headers: headers});
        return response;
        } catch (error) {
        return error;
    }
}

export const deleteEmployee = async (id,headers) => {
    try {
        const response = await axios.delete(`${userEndPoint}/${id}`,{headers: headers});
        return response;
        } catch (error) {
        return error;
    }
}
