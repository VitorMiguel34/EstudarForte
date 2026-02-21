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

async function getNewAccessToken(){
    try{
        const response = await api.post("/tokens/refresh/")
        return response
    }
    catch(error: any){
        if(error.response){
            throw error.response.data
        }
        throw new Error("Erro inesperado ao tentar conseguir novo access token")
    }
}

api.interceptors.request.use((response) => {return response},
    async (error) => {
        try{
            if(error.response?.status == 201){
                getNewAccessToken()
            }
            else{
                throw error
            }
        }
        catch(axiosError: any){
            throw axiosError.response.data
        }
    }
)   

export interface RegisterData{
    name: string,
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
    } 
    catch (error: any) {
        if (error.response) {
            throw error.response.data
        }
        throw new Error("Erro inesperado ao tentar cadastrar usuário");
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
        throw new Error("Erro inesperado ao tentar logar usuário")
    }
}

export async function logOut(){
    try{
        const response = await api.post('/tokens/logout/')
        return response
    }
    catch(error: any){
        if(error.response){
            throw error.response.data
        }
        throw new Error("Erro inesperado ao tentar realizar logout")
    }
}

export async function getIsAuthenticated(): Promise<boolean>{
    try{
        const response = await api.get("/tokens/me/")
        return response.data["isAuthenticated"]
    }
    catch(error: any){
        if(error.response){
            throw error.response.data
        }
        throw new Error("Erro inesperado ao tentar verificar autenticação")
    }
}