import axios, { type AxiosInstance } from 'axios'

const BASEURL:string = "http://localhost:8000"
const api: AxiosInstance = axios.create(
    {baseURL:BASEURL}
)