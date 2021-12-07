import axios from 'axios'

const api = axios.create({
    baseURL: 'http://18.210.174.15/',
})

export default api