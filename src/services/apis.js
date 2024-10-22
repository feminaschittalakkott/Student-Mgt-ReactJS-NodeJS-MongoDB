import base_url from "./base_url";
import axios from "axios";

export const addStudents=async(data)=>{
    return await axios.post(`${base_url}/addstud`, data)
}
export const getStudents=async()=>{
    return await axios.get(`${base_url}/getstud`)
}
export const updateStudents=async(id, data)=>{
    return await axios.put(`${base_url}/editstud/${id}`, data)
}
export const deleteStudent=async(id)=>{
    return await axios.delete(`${base_url}/deletestud/${id}`)
}
export const addSubjects=async(data)=>{
    return await axios.post(`${base_url}/addsub`, data)
}
export const getSubjects=async()=>{
    return await axios.get(`${base_url}/getsub`)
}