import axios, { type AxiosInstance } from 'axios'

const BASEURL: string = "http://localhost:8000"
const api: AxiosInstance = axios.create(
    {
        baseURL:BASEURL,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    }
)
export interface RegisterData{
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export interface LoginData{
    email: string,
    password: string
}

export async function registerUser(data: RegisterData) {
  try {
    const response = await api.post("/users/register/", data)
    return response.data
  } catch (error: any) {
    if (error.response) {
      throw error.response.data
    }
    throw new Error("Erro inesperado");
  }
}

export async function loginUser(data: LoginData){
    try{
        const response = await api.post("/tokens/",data)
        return response.data
    }
    catch(error: any){
        if(error.response){
            throw error.response.data
        }
        throw new Error("Erro inesperado")
    }
}