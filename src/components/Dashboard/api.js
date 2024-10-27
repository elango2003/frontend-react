// axios.defaults.baseURL = 'http://localhost:8080';


import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'content-type':'application/json'
    }
});
export default instance;