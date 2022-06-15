import axios from "axios";

const url="http://localhost:5000";


export const addadmissiondata=async(user) =>{
    return await axios.post(`${url}/registrstudent`, user);
}
export const showadmissiondata=async() =>{
    return await axios.get(`${url}/showregstudent`);
}
