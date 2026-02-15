import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://698b48316c6f9ebe57bc3579.mockapi.io/api/v1/',
    timeout: 10000
})